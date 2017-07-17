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
var kts = [];

require(['kt/main'], function(KT){

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

				var newkt = addNewKaryotypeView(kt,chromosomes[i],percent);

				kts.push(newkt);

				if ( chromosomes[i] === "chr1"){
                   newkt.addLabel("LYPD8",248902716,248903151);
                }

                if ( chromosomes[i] === "chr17") {
                    //41196311        41277500
                    newkt.addLabel("BRCA1", 41196311,41277500);
                }

                if ( chromosomes[i] === "chr2") {
                   newkt.addLabel("TMEM178A",39892637,   39945104);
                }
                if (chromosomes[i]  === "chr3"){
                   newkt.addLabel("TKT",53259652,53290130);
                }
                if (chromosomes[i] === "chr4"){
                    newkt.addLabel("TMEM175",926174,952443);
                }
                if (chromosomes[i] === "chr8"){
                    newkt.addLabel("ZNF16",146155743,146176274);
                }

			}


			
        });

        

    });

	function disableAllThumbs(){
		for (var i = 0 ; i < kts.length ; i++){
			var kt = kts[i];
			kt.showThumb(false);

		}
	}

    function addNewKaryotypeView(kt, chr, percent){
    	//console.log("adding new chromosome " + chr + " " + percent);

    	var div = $("#ktContainer").append("<div id='row"+chr+"' class='row'>");

    	$("#row"+chr).append("<div id='div"+chr+"'>");

 		var newkt = new karyotypesvg.KT();

 		newkt.setParent('#div' +chr);

 		newkt.setScale(percent);

 		newkt.showThumb(false);

		// no need to re-load...
 		newkt.setBands(kt.getBands());

		newkt.update(chr) ;   	
		newkt.updateScale(chr);

		newkt.addListener('bandClicked',function(event){
			console.log(event);

			disableAllThumbs();

			newkt.showThumb(true);

			newkt.update(newkt.getChr(),event.min, event.max);

		});

		return newkt;
    }

});


