module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
      ' * Non-responsive Bootstrap v<%= pkg.version %>\n' +
      ' * Homepage: <%= pkg.homepage %>\n' +
      ' * Based on Bootstrap (http://getbootstrap.com)\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
      ' */\n',

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
          sourceMapFilename: 'css/bootstrap.css.map'
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
          sourceMapFilename: 'css/bootstrap-theme.css.map'
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
    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'css/*.css'
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

  // Default task for project build.
  grunt.registerTask('default', ['clean', 'less', 'autoprefixer', 'usebanner', 'csscomb', 'cssmin', 'csslint']);

  // Task for automatic project builds.
  grunt.registerTask('dev', ['watch']);

  // Task for updating the npm packages used by the Travis build.
  grunt.registerTask('update', ['exec:npmUpdate']);

};
