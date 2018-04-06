/**
 * LiveGames Embed iFrame - GruntFile
 *
 * @since v1.0.0
 */
module.exports = function (grunt) {
  var paths = {
    js: ['./src/**/*.js'],
    mustClearPaths: ['./public/*.js']
  }

  // configure the tasks
  grunt.initConfig({
    //  Clean
    clean: {
      js: {
        force: true,
        src: paths.mustClearPaths
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      min: {
        files: {
          'public/e-if.js': ['src/e-if.js']
        }
      }
    }
  })

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-clean')

  // define the tasks
  grunt.registerTask('build', ['clean:js', 'uglify:min'])
}
