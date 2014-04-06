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
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap.css.map',
          sourceMapFilename: 'css/bootstrap.css.map'
        },
        files: {
          'css/bootstrap.css': ['less/bootstrap.less']
        }
      },
      theme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'bootstrap-theme.css.map',
          sourceMapFilename: 'css/bootstrap-theme.css.map'
        },
        files: {
          'css/bootstrap-theme.css': ['less/theme.less']
        }
      },
      minify: {
        options: {
          cleancss: true
        },
        files: {
          'css/bootstrap.min.css': 'css/bootstrap.css',
          'css/bootstrap-theme.min.css': 'css/bootstrap-theme.css'
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
      css: {
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
  grunt.registerTask('default', ['less:core', 'less:theme', 'autoprefixer', 'usebanner', 'csscomb', 'less:minify', 'csslint']);

  // Task for automatic project builds.
  grunt.registerTask('dev', ['watch']);

  // Task for updating the npm packages used by the Travis build.
  grunt.registerTask('update', ['exec:npmUpdate']);

};
