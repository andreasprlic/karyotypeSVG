'use strict';
requirejs.config({
    baseUrl: 'js',
    paths:{
        main:'kt/main',
        util:'kt/util',
        spans:'kt/spans',
        colors:'kt/colors',
        datatrack:'kt/datatrack',
        label:'kt/label',
        karyotype:'kt/karyotype',
        jquery:'vendor/jquery-2.0.2.min',
        pako:'vendor/pako-0.2.6.min'
    }
});

var karyotypesvg ;

require(['kt/main'], function(KT){

    karyotypesvg = KT;

    $( document ).ready(function() {

        var chr = "chr1";

        console.log(karyotypesvg.about);

        var kt = new karyotypesvg.KT();

        kt.init();

        kt.addLabel("LYPD8",248902716,248903151);

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


