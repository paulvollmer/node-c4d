'use strict'

module.exports = (grunt) ->
  
  # Load plugins.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-jshint'

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    clean: ['docs']

    jshint:
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'bin/c4d']

  grunt.registerTask 'default', ['jshint']
