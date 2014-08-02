/*!
 * Non-responsive Bootstrap's Gruntfile
 * http://www.artbelov.com/nr-bootstrap
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

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
    banner: '/*!\n' +
      ' * Non-responsive Bootstrap v<%= pkg.version %>\n' +
      ' * Homepage: <%= pkg.homepage %>\n' +
      ' * Based on Bootstrap (http://getbootstrap.com)\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
      ' */\n',

    // Task configuration.
    clean: {
      dist: 'assets/css'
    },

    less: {
      dist: {
        options: {
          strictMath: true,
          sourceMap: false,
          outputSourceFiles: false
        },
        files: {
          'assets/css/main.css': 'assets/less/main.less'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      dist: {
        options: {
          map: false
        },
        src: 'assets/css/main.css'
      }
    },

    usebanner: {
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      dist: {
        src: 'assets/css/*.css'
      }
    },

    csscomb: {
      options: {
        config: 'assets/less/.csscomb.json'
      },
      dist: {
        files: {
          'assets/css/main.css': 'assets/css/main.css'
        }
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      dist: {
        files: {
          'assets/css/main.min.css': 'assets/css/main.css'
        }
      }
    },

    csslint: {
      options: {
        csslintrc: 'assets/less/.csslintrc'
      },
      dist: 'assets/css/main.css'
    },

    watch: {
      files: 'assets/less/*.less',
      tasks: 'default'
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Default task for locally tests and compile the CSS.
  grunt.registerTask('default', ['clean', 'less', 'autoprefixer', 'usebanner', 'csscomb', 'cssmin', 'csslint']);
};
