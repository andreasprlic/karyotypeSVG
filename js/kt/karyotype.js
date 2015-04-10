/* -*- mode: javascript; c-basic-offset: 4; indent-tabs-mode: nil -*- */
/*global $:false */
// 
// Derived and heavily extended from karyoscape.js at Dalliance Genome Explorer
//
//
// Karyotype.js
//

define(
    [
        './spans',
        './util',
        './colors',
    ],
    function(spans, util,colors) {

        "use strict";
        var NS_SVG = 'http://www.w3.org/2000/svg';

        var dataLocation =
            "http://staticwest.rcsb.org/gene/hg38/chromosome.band.hg38.txt";

        var karyo_palette = {
            gneg:  colors.forceHex('white'),
            gpos25: 'rgb(200,200,200)',
            gpos33: 'rgb(180,180,180)',
            gpos50: 'rgb(128,128,128)',
            gpos66: 'rgb(100,100,100)',
            gpos75: 'rgb(64,64,64)',
            gpos100: 'rgb(0,0,0)',
            gpos: 'rgb(0,0,0)',
            gvar: 'rgb(100,100,100)',
            acen: colors.forceHex('red'),
            stalk: 'rgb(100,100,100)',
            gradient : 'rgb(128,128,128)',
            border : 'black'
        };

<<<<<<< HEAD
        var thumbColor = 'rgb(50, 88, 128)';
       
=======
        var thumbColor = colors.forceHex('green');
        var thumbStroke = colors.forceHex('darkgreen');
>>>>>>> 65e750e810ff6d73264a22002be0b269bd542dca

        function Karyotype()
        {


            this.width = 400;

            this.trackHeight = 10;

            // we leave a bit of space at the top, for the thumb to be better visible

            this.y = 6;

            // to look ok, this.y should not be smaller than this.thumbSpacer
            this.thumbSpacer = 6;

            this.thumbWidth = 5;

            this.padding = 1;

            this._initialized = false;
            this.listenerMap = {};
            this.karyos = [];
            this.scale = 1;


            this.chrLen = 1;
            this.start = 0;
            this.end = 1;
            this.bands = [];
            this.thumbEnabled = true;

            this.realParent = "";
            this.parent = "";

            this.hPopupHolder = util.makeElement('div');
            this.hPopupHolder.style['font-family'] = 'helvetica';
            this.hPopupHolder.style['font-size'] = '12pt';

            this.resetSVG();

            var that = this;

            function onResize() {
                

                $(parent).css('overflow', 'hidden');
                $(parent).css('width', 'auto');
                $(that.realParent).css('overflow', 'hidden');
                $(that.realParent).css('width', 'auto');
                that.updateScale();
                that.redraw();
            }

            var resizeTimer = false;

            $(window).resize(function () {
                if ( resizeTimer )  {
                 clearTimeout(resizeTimer);
                }
                resizeTimer = setTimeout(onResize, 300);
                
            });
        }

        Karyotype.prototype.resetSVG = function(){
            this.svg = util.makeElementNS(NS_SVG, 'svg');

            util.setAttr(this.svg,'height',this.y + 
                this.trackHeight + this.thumbSpacer * 2 + 
                this.padding);


        };

        Karyotype.prototype.setParent = function(elem) {

            if (typeof $(elem) !== undefined) {

                this.realParent = elem;

                var myInnerDiv = $("<div>");
                $(this.realParent).append(myInnerDiv);

                this.parent = myInnerDiv;

                this.parent.append(this.svg);
                this.parent.append(this.hPopupHolder);


            } else {
                console.error("could not register parent " + elem);
            }


        };

        Karyotype.prototype.addListener = function(eventName, callback) {
            var callbacks = this.listenerMap[eventName];
            if (typeof callbacks === 'undefined') {
                callbacks = [];
                this.listenerMap[eventName] = callbacks;
            }

            callbacks.push(callback);


            if (this._initialized && eventName === 'viewerReady') {
                // don't use dispatch here, we only want this callback to be
                // invoked.
                callback(this, null);
            }
        };

        Karyotype.prototype.init = function(){
            this.loadData(dataLocation);
        };

        Karyotype.prototype.setDataLocation = function(url){
            dataLocation = url;
        };

        Karyotype.prototype.getSVG = function() {
            return this.svg;
        };

        Karyotype.prototype.setTrackHeight = function(newHeight){

            if ( newHeight>0 ) {
                this.trackHeight = newHeight;
            }
            if ( this._initialized) {
                this.redraw();
            }
        };

        Karyotype.prototype.getChrLen = function(){

            return this.chrLen;
        };

        Karyotype.prototype.getChr = function(){

            return this.chr;
        };


        Karyotype.prototype.getWidth = function(){

            return this.width;
        };


        Karyotype.prototype.loadData = function(){

            var that = this;
            $.get(dataLocation, function(data){
                that.setData(data);
            });
        };

        Karyotype.prototype._dispatchEvent = function(event, newEventName, arg) {

            var callbacks = this.listenerMap[newEventName];
            if (callbacks) {
                callbacks.forEach(function (callback) {
                    callback(arg, event);
                });
            }
        };

        Karyotype.prototype.setData = function(data){

            data = data.split(/\r?\n/);

            for(var i = 0; i < data.length; i++){

                if ( data[i].startsWith("#")) {
                    continue;
                }

                var d = data[i].split(/[\t]+/);

                this.bands.push(d);
            }

            if (!this._initialized) {
                this._initialized = true;
                this._dispatchEvent({'name':'viewerReadyEvent'},
                    'viewerReady',this);
            }
        };

        Karyotype.prototype.getBands = function(){
            return this.bands;
        };

        Karyotype.prototype.setBands = function(bands){
            this.bands = bands;
            this._initialized = true;
        };



        Karyotype.prototype.update = function(chr, start, end) {
            this.start = start;
            this.end = end;
            
            if (!this.chr || chr !== this.chr) {
                
                this.chr = chr;
                
                util.removeChildren(this.svg);
                //$(this.svg).empty();
                
                this.karyos = [];
                

                for (var i = 0 ; i < this.bands.length ; i++){

                    //console.log(bands[i][0] + " " + chr);
                    if ( this.bands[i][0] === chr){
                        
                        var elem = this.bands[i];

                        //var chr=elem[0];
                        var min = parseInt(elem[1]);
                        var max = parseInt(elem[2]);
                        var name = elem[3];
                        var desc = elem[4];

                        if ( max > this.chrLen) {
                            this.chrLen = max;
                        }

                        this.karyos.push({
                            id: name,
                            min: min,
                            max: max,
                            label: desc
                        });


                    }
                }

                if ( this._initialized) {
                    this.redraw();
                }
            } 

            if ( this._initialized) {

                this.setThumb();
            }
        };

        Karyotype.prototype.getChromosomeList = function(){

            var chromosomes = [];
            var data = this.getBands();
              for(var i = 0; i < data.length; i++){
                //console.log(data[i]);

                var chr = data[i][0];

                if ( chr.startsWith("#") ) {
                    continue;
                }

                // skip alternatives
                // if ( chr.indexOf('_')  > -1) {
                //     continue;
                // }

                // skip empty lines
                if ( chr.length < 3) {
                    continue;
                }

               
                if ( util.indexOf.call(chromosomes,chr) < 0){
                    chromosomes.push(chr);
                }

            }
            
            return chromosomes.sort(util.sortAlphaNum);
        };

        Karyotype.prototype.getChromosomeSizes = function() {
            var size={};
             var data = this.getBands();
             for(var i = 0; i < data.length; i++){

               
                var chr = data[i][0];
                
                if ( chr.startsWith("#") ) {
                    continue;
                }

                // skip alternatives
                // if ( chr.indexOf('_')  > -1) {
                //     continue;
                // }

                // skip empty lines
                if ( chr.length < 3) {
                    continue;
                }

                var max = parseInt(data[i][2]);

                if ( typeof size[chr] === 'undefined'){
                    

                    size[chr] = max; 
                } else {
                    if ( max > size[chr]) {
                        
                        size[chr] = max;
                    }
                }

             }

             return size;

        };


        Karyotype.prototype.createGradient = function(i,col){
            var gradient = util.makeElementNS(NS_SVG, 'linearGradient', null, {
                id: 'myGradient' + this.chr + '_' + i,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                'gradientUnits': 'userSpaceOnUse'
            });

            // and now the stops..

            var stop1 = util.makeElementNS(NS_SVG, 'stop', null, {
                id: 'start' + this.chr + '_' + i,
                'offset':     '50%',
                'stop-color': col
            });

            gradient.appendChild(stop1);

            var stop2 = util.makeElementNS(NS_SVG, 'stop', null, {
                id: 'stop' + this.chr + '_' +i,
                'offset':    '100%',
                'stop-color': karyo_palette.gradient
            });

            gradient.appendChild(stop2);
                    
            var defs = util.makeElementNS(NS_SVG, 'defs');

            defs.appendChild(gradient);

            this.svg.appendChild(defs);
        };

        Karyotype.prototype.createBox = function(k, bmin, bmax, col,fill){

            var y = this.y;
            
            var height = this.y + this.trackHeight;

            if (k.label === 'stalk' || k.label === 'acen'){

                y = this.y + this.trackHeight / 4;

                height = this.y + this.trackHeight / 2;
            }



            var rect = util.makeElementNS(NS_SVG, 'rect', null, {
                x: bmin,
                y: y,
                width: (bmax - bmin),
                height: height,
                fill: fill,
                //fill:col,
                stroke: k.label === 'acen' ? col : karyo_palette.border,
                strokewidth: 1

            });

            return rect;
        };

        Karyotype.prototype.numberWithCommas = function(x){

            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x)) {
                x = x.replace(pattern, "$1,$2");
            }
            return x;

        };

        Karyotype.prototype.createLeftBox = function(k, bmin, bmax, col,fill){

            var width = (bmax-bmin);
            var radius = 5;
            if ( width - radius <0) {
                radius = width - 1;
            }
            if ( radius < 0 ) {
                radius = 0;
            }

            var path = this.leftBoundedRect(bmin,this.y, width,this.y+ this.trackHeight,radius);


            var rect = util.makeElementNS(NS_SVG, 'path', null, {
                d: path,
                x: bmin,
                y: (k.label === 'stalk' || k.label === 'acen' ? this.y+5 : this.y),
                width: (bmax - bmin),
                height: (k.label === 'stalk' ||
                k.label === 'acen' ? this.y+5 : this.y+this.trackHeight),
                fill: fill,
                //fill:col,
                stroke: k.label === 'acen' ? col : karyo_palette.border,
                strokewidth: 1

            });

            

            return rect;
        };

        Karyotype.prototype.createRightBox = function(k, bmin, bmax, col,fill){

            var width = (bmax-bmin);
            var radius = 5;
            if ( width - radius <0) {
                radius = width - 1;
            }
            if ( radius < 0 ) {
                radius = 0;
            }

            var path = this.rightBoundedRect(bmin,this.y, width,this.y+this.trackHeight,radius);

            var rect = util.makeElementNS(NS_SVG, 'path', null, {
                d: path,
                x: bmin,
                y: (k.label === 'stalk' || k.label === 'acen' ? this.y+5 : this.y),
                width: (bmax - bmin),
                height: (k.label === 'stalk' ||
                k.label === 'acen' ? this.y+5 : this.y+this.trackHeight),
                fill: fill,
                stroke: k.label === 'acen' ? col : karyo_palette.border,
                strokewidth: 1


            });

            
            return rect;
        };

        Karyotype.prototype.rightBoundedRect = function(x,y,width,height, radius){
            return  this.roundedRect(x,y,width,height,radius,false,true,false,true);
        };

        Karyotype.prototype.leftBoundedRect = function(x,y,width,height, radius){
            return  this.roundedRect(x,y,width,height,radius,true,false,true,false);
        };

        /*
         x: x-coordinate
         y: y-coordinate
         w: width
         h: height
         r: corner radius
         tl: top_left rounded?
         tr: top_right rounded?
         bl: bottom_left rounded?
         br: bottom_right rounded?
         */
        Karyotype.prototype.roundedRect = function(x, y, w, h, r, tl, tr, bl, br) {
            var retval;
            retval  = "M" + (x + r) + "," + y;
            retval += "h" + (w - 2*r);
            if (tr) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + r; }
            else { retval += "h" + r; retval += "v" + r; }
            retval += "v" + (h - 2*r);
            if (br) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + r; }
            else { retval += "v" + r; retval += "h" + -r; }
            retval += "h" + (2*r - w);
            if (bl) { retval += "a" + r + "," + r + " 0 0 1 " + -r + "," + -r; }
            else { retval += "h" + -r; retval += "v" + -r; }
            retval += "v" + (2*r - h);
            if (tl) { retval += "a" + r + "," + r + " 0 0 1 " + r + "," + -r; }
            else { retval += "v" + -r; retval += "h" + r; }
            retval += "z";
            return retval;
        };


        Karyotype.prototype.redraw = function() {

            util.removeChildren(this.svg);

            this.karyos = this.karyos.sort(function(k1, k2) {
                return (k1.min|0) - (k2.min|0);
            });
            if (this.karyos.length > 0) {
                if (!this.chrLen) {
                    this.chrLen = this.karyos[this.karyos.length - 1].max;
                }
            } else {
                if (!this.chrLen) {
                    alert('Warning: insufficient data to set up spatial navigator');
                    this.chrLen = 200000000;
                }
                this.karyos.push({
                    id: "",
                    min: 1,
                    max: this.chrLen,
                    label: 'gneg'
                });
            }
            var bandspans = null;

            for (var i = 0; i < this.karyos.length; ++i) {
                var k = this.karyos[i];
                var bmin = this.padding+((1.0 * k.min) / this.chrLen) * this.width;
                var bmax = this.padding+((1.0 * k.max) / this.chrLen) * this.width;
                var col = karyo_palette[k.label];

                if (!col) {
                    col = karyo_palette[k.id];                    
                    k.label=k.id;
                } 
                
                if (!col) {
                    
                    console.log(k);
                    console.error("don't understand " + k.label + " : " + k);
                } else {
                    if (bmax > bmin) {

                        this.createGradient(i,col);

                        var fill = 'url(#myGradient'+ this.chr + '_'  + i+')';

                        var box;
                        if ( i === 0 ) {
                            box = this.createLeftBox(k, bmin, bmax, col, fill);
                        } else if  ( i === (this.karyos.length - 1)) {
                            box = this.createRightBox(k, bmin, bmax, col,fill);
                        } else {
                            box = this.createBox(k, bmin, bmax, col, fill);
                        }

                        var chrNr = "";
                        if (this.chr.startsWith("chr")) {
                            chrNr = this.chr.substring(3);
                        }
                        $(box).tooltip({
                            'title':chrNr + k.id + ' ' + 
                            this.numberWithCommas(k.min) + ' - ' +
                            this.numberWithCommas(k.max),
                            'container':'body'
                        });
                        $(box).css('cursor', 'pointer');


                        this.svg.appendChild(box);

                        if (k.label.substring(0, 1) === 'g') {
                            var br = new spans.Range(k.min, k.max);
                            if (bandspans === null) {
                                bandspans = br;
                            } else {
                                bandspans = spans.union(bandspans, br);
                            }
                        }


                        var bandClickedEventFunction = this.createBandClickedEvent(k);

                        $(box).bind('click', bandClickedEventFunction);

                        var mouseOverBandEvent = this.createMouseOverBandEvent(k);

                        $(box).bind('mouseover', mouseOverBandEvent);

                    } else {
                        console.error("bmax < bmin " + k);
                    }
                }
            }

            this.initThumb();            

        };

       
        Karyotype.prototype.createBandClickedEvent = function(k){
            var that = this;
            return function (event ) {

               

                var pos = $(that.realParent).position();

                var x = event.clientX -4;

                var width = that.width;
                var chrLen = that.chrLen;

                var trueX = x - pos.left;

                var seqPos = Math.round(trueX / width * chrLen);
  
                that._dispatchEvent({'name':'bandClickedEvent'},
                    'bandClicked',{ 'min': seqPos,                     
                     'max': (seqPos + width),
                     'chrLen':that.chrLen, 
                     'chr' : that.chr,
                     'band':k});
            };
        };

        Karyotype.prototype.createMouseOverBandEvent = function(k){
            var that = this;
            return function () {
                that._dispatchEvent({'name':'mouseOverBandEvent'},
                    'mouseOverBand',k);
            };
        };

        Karyotype.prototype.initThumb = function() {

            if ( ! this.thumbEnabled){
                return;
            }

            this.thumb = util.makeElementNS(NS_SVG, 'rect', null, {
                id:'thumb' + this.chr,
                x: 50,
                y: this.y-this.thumbSpacer,
                width: this.thumbWidth,
                height: this.y+this.trackHeight + this.thumbSpacer *2 ,
                fill: thumbColor,
                stroke: thumbStroke,
                strokewidth:1,
                opacity:0.7
            });

            $(this.thumb).css('cursor', 'col-resize');

            this.svg.appendChild(this.thumb);

            this.setThumb();

            var thisKaryo = this;
            var sliderDeltaX;

            var that = this;
            var moveHandler = function(ev) {
                ev.stopPropagation(); ev.preventDefault();
                var sliderX = Math.max(-4, Math.min(ev.clientX + sliderDeltaX,
                    thisKaryo.width - 4));
                thisKaryo.thumb.setAttribute('x', sliderX);
            };
            var upHandler = function(ev) {
                ev.stopPropagation(); ev.preventDefault();
                if (thisKaryo.onchange) {

                    var val = (thisKaryo.thumb.getAttribute('x')|0);

                    thisKaryo.onchange((1.0 * (val + 4)) / thisKaryo.width, true);
                }
                document.removeEventListener('mousemove', moveHandler, true);
                document.removeEventListener('mouseup', upHandler, true);

                // at what sequence position did the slider get released?

                var xval = (thisKaryo.thumb.getAttribute('x')|0);
                var start =   Math.round(xval / thisKaryo.width * thisKaryo.chrLen) ;

                //console.log(start + " " + thisKaryo.chrLen + " " + thisKaryo.chrLen * start ) ;
                
                var width = thisKaryo.thumb.getAttribute('width')|1;
                
                var end = Math.round(start + (width / thisKaryo.width * thisKaryo.chrLen));

                that._dispatchEvent({'name':'sliderMovedEvent'},
                    'sliderMoved', {'min':start,'max': end, 'chr': thisKaryo.chr});
            };

            this.thumb.addEventListener('mousedown', function(ev) {
                ev.stopPropagation(); ev.preventDefault();
                sliderDeltaX = thisKaryo.thumb.getAttribute('x') - ev.clientX;
                document.addEventListener('mousemove', moveHandler, true);
                document.addEventListener('mouseup', upHandler, true);
            }, false);


        };

        /** enable/disable the display of the "thumb", which displays a currently selected region.
        */
        Karyotype.prototype.showThumb = function(flag) {

            this.thumbEnabled = flag;

            if (flag && ( ! this.thumb)) {
                this.initThumb();
            }

            if ( ! flag && this.thumb){
                this.svg.removeChild(this.thumb);
                this.thumb = undefined;


            }

        };

        /** update the position of the "thumb".
        */
        Karyotype.prototype.setThumb = function() {

            if ( ! this.thumbEnabled){
                return;
            }

            if ( ! this._initialized) {
                return;
            }

            var pos = (this.start|0) ;
            
            var gpos = Math.round(((1.0 * pos)/this.chrLen) * this.width);

            var w = Math.round((this.end|0 - this.start|0) / this.chrLen * this.width);

            if ( w < 5) {
                w = 5;
            }

            // console.log("setThumb: " + gpos + " " + w + " tw: " + this.width + " chrlen " +
            //             this.chrLen  + " start " + this.start + " this.thumb: " + this.thumb);
            if (this.thumb) {
                 
                this.thumb.setAttribute('x', gpos );
              
                this.thumb.setAttribute('width', w);
                
            }
        };

        /** allows to set the scale of this karyotype image. This can be used when showing 
            multiple karyotypes on the same page.

            Chr1 would be 100% of the scale, and each other chromosome can get scaled 
            down relative to its size.

            Percent is a number between 0 and 1;
        */
        Karyotype.prototype.setScale = function(percent){

            if ( percent < 0) {
                console.error("scale has to be a value between 0 and 1");
                percent = 1;
            }

            if ( percent > 1) {
                console.error("scale has to be a value between 0 and 1");
                // prob a user input error
                if ( percent <=100) {
                    percent = percent / 100;
                } else {

                    percent = 1;
                }
            }

            this.scale = percent;

        };

        Karyotype.prototype.updateScale = function () {

            var availWidth = this.getPreferredWidth() - this.padding * 2;
            if ( availWidth < 2) {
                return;
            }

            this.width = availWidth * this.scale ;

            //$(this.parent).css('overflow', 'auto');
            //$(this.parent).css('width', $(this.realParent).width());

            $(this.realParent).empty();

            this.resetSVG();
            this.setParent(this.realParent);

            $(this.svg).attr("width",this.width+this.padding * 2);
            this.redraw();

        };

        Karyotype.prototype.getPreferredWidth = function () {

            var availWidth = $(this.realParent).width() ;

            if( availWidth < 1){
                console.error("something is wrong with this page");
                return 1;
            }
            return availWidth;

        };


        return {
            Karyotype : function(elem, options){
                return new Karyotype(elem, options);
            }

        };

    });