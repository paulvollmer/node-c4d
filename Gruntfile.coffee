'use strict'

shell = require 'shelljs'

module.exports = (grunt) ->
  
  # Load plugins.
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-jshint'

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    clean: 
      docs: ['docs']
      test: ['test/report.json', 'test/report.txt', 'test-coverage.html']

    jshint:
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'bin/c4d']

  # Register the default task
  grunt.registerTask 'default', ['test']
  
  # Register other tasks
  grunt.registerTask 'test', 'Testing', ->
    shell.exec 'node_modules/.bin/mocha --ui tdd --reporter spec'

  grunt.registerTask 'test-c4d', 'Testing with CINEMA 4D', ->
    console.log '\n---> Testing Cinema 4D cli\n\n'
    shell.exec 'node bin/c4d -h'
    shell.exec 'node bin/c4d -V'
    console.log '\n---> Testing Cinema 4D programmatically\n\n'
    console.log 'c4d -r test/files/project.c4d\n'
    shell.exec 'node bin/c4d -r test/files/project.c4d'
    console.log 'c4d -r test/files/project.c4d --frame 0,2\n'
    shell.exec 'node bin/c4d -r test/files/project.c4d --frame 0,2'

  grunt.registerTask 'jsdoc', 'generate docs', ->
    shell.exec 'node_modules/.bin/jsdoc --destination docs ./src ./README.md'
