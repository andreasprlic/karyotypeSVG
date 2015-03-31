/* Derived in parts from PV viewer.
*
* (C) Marco Piasini
*
* */
define(function()
{

    "use strict";

    var exports = {};

    exports.rgb = {};

    var rgb = exports.rgb;

    exports.rgb.fromValues = function(x, y, z, w) {
        var out = new Array(4);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    };

    exports.rgb.mix = function(out, colorOne, colorTwo, t) {
        var oneMinusT = 1.0 - t;
        out[0] = colorOne[0]*t+colorTwo[0]*oneMinusT;
        out[1] = colorOne[1]*t+colorTwo[1]*oneMinusT;
        out[2] = colorOne[2]*t+colorTwo[2]*oneMinusT;
        out[3] = colorOne[3]*t+colorTwo[3]*oneMinusT;
        return out;
    };

    exports.rgb.hex2rgb = function(color){
        var r, g, b, a;
        if (color.length === 4 || color.length === 5 ) {
            r = parseInt(color[1], 16);
            g = parseInt(color[2], 16);
            b = parseInt(color[3], 16);
            a = 15;
            if(color.length===5) {
                a = parseInt(color[4], 16);
            }
            var oneOver15 = 1/15.0;
            return rgb.fromValues(oneOver15 * r, oneOver15 * g,
                oneOver15 * b, oneOver15 * a);
        }
        if (color.length === 7 || color.length === 9) {
            r = parseInt(color.substr(1, 2), 16);
            g = parseInt(color.substr(3, 2), 16);
            b = parseInt(color.substr(5, 2), 16);
            a = 255;
            if(color.length===9) {
                a = parseInt(color.substr(7, 2), 16);
            }
            var oneOver255 = 1/255.0;
            return rgb.fromValues(oneOver255 * r, oneOver255 * g,
                oneOver255 * b, oneOver255 * a);
        }
    };

    var COLORS = {
        white :        rgb.fromValues(1.0,1.0 ,1.0,1.0),
        black :        rgb.fromValues(0.0,0.0 ,0.0,1.0),
        grey :         rgb.fromValues(0.5,0.5 ,0.5,1.0),
        lightgrey :    rgb.fromValues(0.8,0.8 ,0.8,1.0),
        darkgrey :     rgb.fromValues(0.3,0.3 ,0.3,1.0),
        red :          rgb.hex2rgb("#AA00A2"),
        darkred :      rgb.hex2rgb("#7F207B"),
        lightred :     rgb.fromValues(1.0,0.5 ,0.5,1.0),
        green :        rgb.hex2rgb("#C9F600"),
        darkgreen :    rgb.hex2rgb("#9FB82E"),
        lightgreen :   rgb.hex2rgb("#E1FA71"), // or D8FA3F
        blue :         rgb.hex2rgb("#6A93D4"), // or 6A93D4
        darkblue :     rgb.hex2rgb("#284A7E"), // or 104BA9
        lightblue :    rgb.fromValues(0.5,0.5 ,1.0,1.0),
        yellow :       rgb.hex2rgb("#FFCC73"),
        darkyellow :   rgb.fromValues(0.5,0.5 ,0.0,1.0),
        lightyellow :  rgb.fromValues(1.0,1.0 ,0.5,1.0),
        cyan :         rgb.fromValues(0.0,1.0 ,1.0,1.0),
        darkcyan :     rgb.fromValues(0.0,0.5 ,0.5,1.0),
        lightcyan :    rgb.fromValues(0.5,1.0 ,1.0,1.0),
        magenta :      rgb.fromValues(1.0,0.0 ,1.0,1.0),
        darkmagenta :  rgb.fromValues(0.5,0.0 ,0.5,1.0),
        lightmagenta : rgb.fromValues(1.0,0.5 ,1.0,1.0),
        orange :       rgb.hex2rgb("#FFA200"), // or FFBA40
        darkorange :   rgb.fromValues(0.5,0.25,0.0,1.0),
        lightorange :  rgb.fromValues(1.0,0.75,0.5,1.0),
        brown :        rgb.hex2rgb("#A66A00"),
        purple :       rgb.hex2rgb("#D435CD")
    };


    exports.rgb.componentToHex = function(c) {

        var hex = c.toString(16);

        return hex.length === 1 ? "0" + hex : hex;
    };

    exports.rgb.rgb2hex = function(color)
    {
        if ( color.length === 3){
            var r = color[0];
            var g = color[1];
            var b = color[2];
            return "#" +
                exports.rgb.componentToHex(r) +
                exports.rgb.componentToHex(g) +
                exports.rgb.componentToHex(b);

        } else if ( color.length ===4 || color.length === 5){

          var r1 = color[0];
          var g1 = color[1];
          var b1 = color[2];
          var a1 = 15;
          if(color.length===4) {
              a1 = color[3];
          }

            return "#" +
                exports.rgb.componentToHex(r1*255) +
                exports.rgb.componentToHex(g1*255) +
                exports.rgb.componentToHex(b1*255);
        }
        return "#000000";
    };



// provide an override of the default color setting.
    exports.setColorPalette = function(customColors){
        console.log("setting colors");
        COLORS = customColors;
        exports.initGradients();
    };

// internal function to force various types into an RGBA quadruplet 
    exports.forceRGB = function(color) {
        if (typeof color === 'string') {
            var lookup = COLORS[color];
            if (lookup !== undefined) {
                return lookup;
            } else if (color.length > 0 && color[0] === '#') {
                return exports.hex2rgb(color);
            } else {
                console.error("unknown color " + color);
            }
        }
        // in case no alpha component is provided, default alpha to 1.0
        if (color.length === 3) {
            return [color[0], color[1], color[2], 1.0];
        }
        return color;
    };

    exports.forceHex = function(color){
        var lookup = COLORS[color];
        if ( lookup !== undefined){

            return exports.rgb.rgb2hex(lookup);
        }
    };


    return exports;
});

