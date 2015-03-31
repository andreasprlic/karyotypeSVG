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

require(['kt/main','kt/util'], function(KT, util){

    karyotypesvg = KT;

    $( document ).ready(function() {

        console.log(karyotypesvg.about);

        var kt = new karyotypesvg.KT();

        kt.init();

        kt.addListener('viewerReady', function () {

			var chromosomes = kt.getChromosomeList();
			//console.log(chromosomes);

			var sizes = kt.getChromosomeSizes();
			//console.log(sizes);

			// determine longest chromosome
			// usually it should be chr1, but what if the input file is for a custom species?

			var maxChromosome = "";
			var maxChromosomeLength = 0;

			var keys = Object.keys(sizes);

			for (var i = 0 ; i < keys.length ; i++){
				var chrLen = sizes[keys[i]];
				if ( chrLen > maxChromosomeLength) {
					maxChromosome = keys[i];
					maxChromosomeLength = chrLen;
				}
			}

			console.log("longest chromosome : " + maxChromosome + " length: " + maxChromosomeLength);

			for (var i = 0 ; i < chromosomes.length ; i++){

				// we skip the alternatives...
				if ( chromosomes[i].indexOf('_')  > -1) {
					continue;
				} 

				// we also won't show chrM, it is too small to get displayed.
				if ( chromosomes[i] === "chrM") {
					continue;
				}
				var chrLen = sizes[chromosomes[i]];

				var percent = chrLen / maxChromosomeLength;
				addNewKaryotypeView(kt,chromosomes[i],percent);

			}


			
        });

        

    });

    function addNewKaryotypeView(kt, chr, percent){
    	//console.log("adding new chromosome " + chr + " " + percent);

    	var div = $("#ktContainer").append("<div>");

    	$(div).append("<label> " + chr + " </label>");

    	$(div).append("<div id='div"+chr+"'>");

 		var newkt = new karyotypesvg.KT();

 		newkt.setParent('#div' +chr);

 		newkt.setScale(percent);

		// no need to re-load...
 		newkt.setBands(kt.getBands());

		newkt.update(chr) ;   	
		newkt.updateScale(chr);
    }

});


