/* -*- mode: javascript; c-
 /*global $:false */
/**
 * Created by aprlic on 7/8
 */
define(
    function(require) {

        var colors = require('colors');
        var util   = require('util');


        var NS_SVG = 'http://www.w3.org/2000/svg';

        function Label(parentkt){
            this.karyotype = parentkt;

            console.log("label color" + colors.forceHex('darkblue'));


            this.description = "";
            this.start = 0;
            this.stop = 0;
        }

        Label.prototype.setDescription = function(label){
            this.description = label;
        };

        Label.prototype.getDescription = function(){
            return this.description;
        };

        Label.prototype.setStart = function (start){
            this.start = start;
        };

        Label.prototype.setStop = function (stop){
            this.stop = stop;
        };

        Label.prototype.redraw = function (svg, y) {

            var x = this.karyotype.toScreenCoords(this.start);
            var w = this.karyotype.toScreenCoords(this.stop) - x;

            // minimum 5 px otherwise no point in drawing
            if ( w < 5) {
                w = 5;
            }

            // too close to right edge is not visible..
            var maxX = this.karyotype.toScreenCoords(this.karyotype.chrLen);
            if ( maxX - x < 10) {
                x = maxX - 10;
            }

            var h = 1;

            var fill = colors.forceHex('darkblue');

            var ly = y + 2;

            var rect = util.makeElementNS(NS_SVG, 'rect', null, {
                x: x,
                y: ly,
                width: w,
                height: h,
                stroke: fill,
                strokewidth: 1

            });
            svg.appendChild(rect);


            //draw middle line
            var xm = x + w/2;
            var rectm = util.makeElementNS(NS_SVG, 'rect', null, {
                x: xm,
                y: ly,
                width: 1,
                height: 5,
                stroke: fill,
                strokewidth: 1
            });
            svg.appendChild(rectm);


            // now decide if to draw line to left / right of chromosome.
            // depends on distance to end of chromosome

            var chrLen = this.karyotype.chrLen;
            var drawRight = true;
            if ( this.stop > chrLen / 2) {
                // draw to the left
                drawRight = false;
            }

            var rectl;

            if ( drawRight){
                rectl = util.makeElementNS(NS_SVG, 'rect', null, {
                    x: xm,
                    y: ly+5,
                    width: 30,
                    height: 1,
                    stroke: fill,
                    strokewidth: 1
                });

                var txt = util.createText(this.description,xm + 35, ly + 10);
                var textNode = document.createTextNode(this.description);
                txt.appendChild(textNode);
                svg.append(txt);

            } else {
                rectl = util.makeElementNS(NS_SVG, 'rect', null, {
                    x: xm-30,
                    y: ly+5,
                    width: 31,
                    height: 1,
                    stroke: fill,
                    strokewidth: 1
                });

                var textNodeL = document.createTextNode(this.description);
                 svg.append(textNodeL);

                var txtR = util.createText(this.description,xm - 35 , ly + 10);
                txtR.appendChild(textNodeL);
                svg.append(txtR);

                var textL = util.getTextNodeWidth(textNodeL);
                txtR.setAttributeNS(null,"x",(xm - 35 - textL));
            }
            svg.appendChild(rectl);

        };

        return {
            Label : function(elem, options){
                return new Label(elem, options);
            }

        };

    }
);
