'use strict';
requirejs.config({
    baseUrl: 'js',
    paths:{
        main:'kt/main',
        util:'kt/util',
        spans:'kt/spans',
        colors:'kt/colors',
        karyotype:'kt/karyotype',
        jquery:'vendor/jquery-2.0.2.min'
    }
});

var karyotypesvg ;

require(['kt/main'], function(KT){

    karyotypesvg = KT;

    $( document ).ready(function() {

        var chr = "chrY";

        console.log(karyotypesvg.about);

        var kt = new karyotypesvg.KT();

        kt.init();

        kt.setParent("#karyotypeView");

        kt.addListener('viewerReady', function () {
            kt.update(chr);

            kt.updateScale();

            console.log(kt.getSVG());

        });

        kt.addListener('bandClicked',function(event){
            console.log(event);
            
            kt.update(chr,event.min, event.max);

        });

        kt.addListener('sliderMoved',function(event){
            console.log(event);

        });

    });

});


