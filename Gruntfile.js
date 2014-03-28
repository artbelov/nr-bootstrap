/*!
 * Non-responsive Bootstrap Gruntfile
 * Licensed under MIT
 */

module.exports = function(grunt) {

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
      core: {
        files: {
          'css/bootstrap.css': [
            'less/bootstrap.less'
          ]
        },
        options: {
          compress: false,
          sourceMap: true,
          sourceMapFilename: 'css/bootstrap.css.map',
          sourceMapRootpath: ''
        }
      },
      theme: {
        files: {
          'css/bootstrap-theme.css': [
            'less/theme.less'
          ]
        },
        options: {
          compress: false,
          sourceMap: true,
          sourceMapFilename: 'css/bootstrap-theme.css.map',
          sourceMapRootpath: ''
        }
      }
    },
    watch: {
      less: {
        files: [
          'less/*.less'
        ],
        tasks: 'default'
      }
    },
    clean: {
      core: [
        'css/bootstrap.css',
        'css/bootstrap.min.css',
        'css/bootstrap.css.map'
      ],
      theme: [
        'css/bootstrap-theme.css',
        'css/bootstrap-theme.min.css',
        'css/bootstrap-theme.css.map'
      ]
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      core: {
        options: {
          map: true
        },
        src: 'css/bootstrap.css'
      },
      theme: {
        options: {
          map: true
        },
        src: 'css/bootstrap-theme.css'
      }
    },
    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      core: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/'
      }
    },
    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      src: [
        'css/bootstrap.css',
        'css/bootstrap-theme.css'
      ]
    },
    cssmin: {
      options: {
        keepSpecialComments: '*',
        noAdvanced: true,
        report: 'min',
        compatibility: 'ie8'
      },
      core: {
        src: 'css/bootstrap.css',
        dest: 'css/bootstrap.min.css'
      },
      theme: {
        src: 'css/bootstrap-theme.css',
        dest: 'css/bootstrap-theme.min.css'
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'autoprefixer',
    'csscomb',
    'cssmin',
    'csslint'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
