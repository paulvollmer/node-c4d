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
 * The cli options.
 */
program
  .version('0.0.2')
  .option('-r, --render [file]', 'Render the added file.', 'testfile')
  .parse(process.argv);


if (program.render) {
  var tmpRender = '-render '+program.render;
  console.log('tmpRender: '+tmpRender);

  var c4dRender = spawn(config.cinema4d_path, ['-nogui', '-render', program.render]);
  c4dRender.stdout.on('data', function (data) {
    console.log(data.toString());
  });
  c4dRender.stderr.on('data', function (data) {
    console.log('Error: '+data.toString());
  });
  c4dRender.on('close', function(code) {
    console.log('Closed with code: '+code);
  });
}
