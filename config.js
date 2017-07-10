'use strict';
requirejs.config({
    baseUrl: 'js',
    paths:{
        main:'kt/main',
        util:'kt/util',
        spans:'kt/spans',
        colors:'kt/colors',
        label:'kt/label',
        datatrack:'kt/datatrack',
        karyotype:'kt/karyotype',
        jquery:'vendor/jquery-2.0.2.min',
        pako:'vendor/pako-0.2.6.min'
    },
    options:{
        include:['kt/vendor/require.js']
    }
});

define(function(require){
    "use strict";

    var karyotypesvg = require(karyotype);

    return {
        KT:karyotype.Karyotype,
        about:'KaryotypeJS, a SVG based viewer for karyotype data'
    };
});



