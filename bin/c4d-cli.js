#!/usr/bin/env node

/**
 * Cinema4D commandline Render Utilities
 * Rendering projects via terminal. This is useful for automation...
 *
 * @author: Paul Vollmer
 */


/**
 * Module dependencies.
 */
var program = require('commander');
var config = require('./config');
var pkg = require('../package.json');
var utils = require('../src/utils.js');
var c4d = require('../src/index.js');

/**
 * The cli options.
 */
program
  .version(pkg.version)
  .option('-r, --render [filepath]', 'Render the added file.')
  .option('-s, --silent', 'silent mode. don\'t output anything')
program.on('--help', function() {
  console.log('  Description:');
  console.log('');
  console.log('    '+pkg.description);
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    # render a file');
  console.log('    $ c4d -r /path/to/your/file.c4d');
  console.log('');
});
program.parse(process.argv);


/**
 * If no option are set. print out the help.
 */
if (program.render == undefined) {
  program.help();
}
/**
 * If the render option is set, lets render some nice images.
 */
else {
  if (program.render) {
    c4d.render({
      silent: program.silent,
      file: program.render,
      out_format: 'TIFF'
    });
  }
}
