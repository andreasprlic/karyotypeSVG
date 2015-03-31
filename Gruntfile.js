SOURCE_FILES=[
    'js/kt/spans.js',
    'js/kt/util.js',
    'js/kt/colors.js',
    'js/kt/karyotype.js',
    'js/kt/main.js',
];

module.exports = function(grunt){

  "use strict";

  var pkg = grunt.file.readJSON('package.json');

  var BANNER = '/*! KaryotypeJS - SVG based karyotype rendering. <%= pkg.name %> <%= pkg.version %>  <%= grunt.template.today("yyy-mm-dd") %> */\n';

  //var END_SNIPPET='return kt; }));';
  //
  //var START_SNIPPET=BANNER+"\n\
  //(function (root, factory) {\n\
  //    if (typeof define === 'function' && define.amd) {\n\
  //        define([], factory);\n\
  //    } else {\n\
  //        var kt = factory();\n\
  //        root.kt = kt;\n\
  //    }\n\
  //}(this, function () {\n\
  //    // modules will be inlined here\n\
  //";

  grunt.initConfig({
    pkg: pkg,

    jshint : {

      options: {
        multistr :true,
        curly : true,
        eqeqeq : true,
        forin : true,
        maxlen: 100,
        /*freeze : true, */
        immed : true,
        latedef : true,
        undef : true,
        browser : true,
        devel : true,
        predef : [ 'define' ],
        unused : true
      },
      all: SOURCE_FILES
    },


    requirejs: {
      compile: {
        options: {
          name:'karyotype',
          optimize: 'none',
          baseUrl: "js",
          mainConfigFile: "config.js",
          out: "build/<%= pkg.name %>.dbg.js",
          include:['vendor/require.js']
        }
      }
    },

    removelogging : {
      dist :  {
        src : 'build/<%= pkg.name %>.dbg.js',
        dest : 'build/<%= pkg.name %>.rel.js'
      }
    },

    uglify: {
      options : {
        banner: BANNER
      },
      build : {
        src:  'build/<%= pkg.name %>.rel.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

// Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

// Default task(s).
  grunt.registerTask('default', [
    'jshint', 'requirejs', 'removelogging', 'uglify'
  ]);

};