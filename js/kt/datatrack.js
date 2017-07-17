/* -*- mode: javascript; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*global $:false */
/**
 * Created by aprlic on 7/8/17.
 */
define(
    function(require) {

        var util   = require('util');


        var NS_SVG = 'http://www.w3.org/2000/svg';

        function DataTrack(parentKT)
        {
            this.dataTrackURL = "";
            this.data = {};
            this.karyotype = parentKT;

        }

        DataTrack.prototype.setURL = function(url) {
            this.dataTrackURL = url;

            var that = this;
            this.karyotype.addListener(
                'loadDataTrack', function () {
                    that.loadDataTrack();
                });

        };

        DataTrack.prototype.loadDataTrack = function(){

            if ( this.dataTrackURL === ""){
                return;
            }
            var that = this;

            // if url ends with .gz
            // use gunzip to read the data faster
            try {
                if (util.endsWith(this.dataTrackURL, '.gz')) {

                    $.ajax({
                        url: this.dataTrackURL,
                        type: "GET",
                        dataType: 'text',
                        mimeType: 'text/plain; charset=x-user-defined',
                        processData: false,
                        responseType: 'blob',
                        success: function (result) {
                            var d = util.gzipSuccessFunction(result);
                            that.setData(d);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log(errorThrown);
                            console.error(textStatus);
                            console.log(jqXHR);
                        },
                    });


                } else {
                    //  a standard txt file is much easier to parse (but slower to download)
                    $.getJSON(this.dataTrackURL, function (data) {
                        
                            //that.setData($.parseJSON(data));
                              that.setData(data);

                    });
                }
            } catch (err){
                console.log(err);
            }
        };

        /** Draw the data at the specificed location on the svg graphics
         *
         * @param svg - the svg object
         * @param y - baseline of the karyotype image
         * @param maxTrackHeight
         */
        DataTrack.prototype.redraw = function (svg, y, trackHeight){

            // the incoming y is for the karyotype. Since we draw on top,
            // need to take the track height off
            var baseline = y - trackHeight;

            var maxHeight = this.data.header.max;

            var spacer = 0;
            
            var heightScale = (trackHeight - spacer) / maxHeight;

            var fill = this.karyotype.getColors().acen;

            for ( var i = 0 ; i < this.data.data.length ; i++){
                var p = this.data.data[i];
                var key = Object.keys(p)[0];
                var val = p[key];

                var h =  Math.abs(val * heightScale);

                var genomePos = parseInt(key);
                var x = this.karyotype.toScreenCoords(genomePos) ;

                var x2 = this.karyotype.toScreenCoords(genomePos+10000);
                var w = (x2-x);
                //console.log(key + "-" + h + " ( x: )" + x + " ( w: ) " + w);

                var rect = util.makeElementNS(NS_SVG, 'rect', null, {
                    x: x,
                    y: baseline+trackHeight-h-spacer,
                    width: w ,
                    height: h,
                    stroke: fill,
                    strokewidth: 1

                });
                svg.appendChild(rect);
            }
            
            
            


        };

        DataTrack.prototype.getData = function(){
            return this.data;
        };

        DataTrack.prototype.setData = function(data){

            this.data = data;
            this.karyotype.updateScale();
        };

        return {
            DataTrack : function(elem, options){
                return new DataTrack(elem, options);
            }

        };

    }
);