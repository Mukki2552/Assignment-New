var request = require('request');

module.exports = function(grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/js/**/*.js',
        '!./dist/app.min.js',
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      ]
    },
    browserSync: {
      bsFiles: {
        src: ['./dist/*.html', './dist/css/*.css', './dist/js/*.js']
      },
      options: {
          watchTask: true,
          server: {
              baseDir: "./src"
          }
      }
    },
    uglify: {
      dist: {
        files: {
          './dist/app.min.js': [
            'src/js/app.js'
          ]
        },
        options: {
          sourceMap: './dist/app.min.js.map',
          sourceMappingURL: './dist/app.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [
          'src/js/**/*.js'
        ],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: [
          '**/*.html'
        ]
      }
    },
    
    clean: {
      dist: [
        './dist/app.min.css',
        './dist/app.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', ['sass', 'browserSync', 'watch', 'clean',
  'uglify']);

};