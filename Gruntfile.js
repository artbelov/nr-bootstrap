/*!
 * Non-responsive Bootstrap's Gruntfile
 */

/* jshint node: true */
/* global module */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines.
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner:
      '/*!\n' +
      ' * Non-responsive Bootstrap v<%= pkg.version %>\n' +
      ' * Homepage: <%= pkg.homepage %>\n' +
      ' * Based on Bootstrap (http://getbootstrap.com)\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
      ' */\n',

    // Task configuration.
    less: {
      docs: {
        options: {
          strictMath: true,
          sourceMap: false,
          outputSourceFiles: true,
          sourceMapURL: 'main.css.map',
          sourceMapFilename: 'assets/css/main.css.map'
        },
        files: {
          'assets/css/main.css': ['assets/less/main.less']
        }
      },
      minify: {
        options: {
          cleancss: true
        },
        files: {
          'assets/css/main.min.css': 'assets/css/main.css'
        }
      }
    },

    watch: {
      less: {
        files: [
          'assets/less/*.less'
        ],
        tasks: 'default'
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      docs: {
        options: {
          map: undefined
        },
        src: 'assets/css/main.css'
      }
    },

    csscomb: {
      options: {
        config: 'assets/less/.csscomb.json'
      },
      css: {
        expand: true,
        cwd: 'assets/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'assets/css/'
      }
    },

    csslint: {
      options: {
        csslintrc: 'assets/less/.csslintrc'
      },
      src: [
        'assets/css/main.css'
      ]
    }

  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Default task for locally tests and compile the CSS.
  grunt.registerTask('default', ['less:docs', 'autoprefixer', 'csscomb', 'less:minify', 'csslint']);

  // Task for watching Less files and automatically building them on save.
  grunt.registerTask('watch', ['watch']);

};
