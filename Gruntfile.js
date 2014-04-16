module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Task configuration
    less: {
      docs: {
        options: {
          strictMath: true,
          sourceMap: true,
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
          map: true
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
    },

    exec: {
      npmUpdate: {
        command: 'npm update'
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // Default task for locally tests and compile the CSS.
  grunt.registerTask('default', ['less:docs', 'autoprefixer', 'csscomb', 'less:minify', 'csslint']);

  // Task for watching Less files and automatically building them on save.
  grunt.registerTask('watch', ['watch']);

  // Task for updating the npm packages used by the Travis build.
  grunt.registerTask('update', ['exec:npmUpdate']);

};
