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
var spawn = require('child_process').spawn;
var program = require('commander');
var config = require('./config');
var pkg = require('../package.json');


/**
 * Print out the CINEMA 4D -help.
 * Only used for developing and debugging this tool.
 */
// var c4dHelp = spawn(config.cinema4d_path, ['-help']);
// c4dHelp.stdout.on('data', function (data) {
//     console.log(data.toString());
// });
// c4dHelp.on('close', function (code) {
//     console.log('process exit code ' + code);
// });

/**
 * Variables
 */
var silent = false;

/**
 * The cli options.
 */
program
  .version(pkg.version)
  .option('-r, --render [filepath]', 'Render the added file.', 'testfile')
  .option('-s, --silent', 'Silent mode. Don\'t output anything' )
  .parse(process.argv);


if (program.silent) {
  silent = true;
}

if (program.render) {
  var c4dRender = spawn(config.cinema4d_path, ['-nogui', '-render', program.render]);
  
  c4dRender.stdout.on('data', function (data) {
    if (!silent) {
      console.log(data.toString());
    }
  });
  c4dRender.stderr.on('data', function (data) {
    if (!silent) {
      console.log('Error: '+data.toString());
    }
  });
  c4dRender.on('close', function(code) {
    if (!silent) {
      console.log('Closed with code: '+code);
    }
  });
}
