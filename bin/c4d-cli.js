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
var utils = require('../src/utils.js');

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
  console.log('    $ c4d-cli -r /path/to/your/file.c4d');
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
    var c4dRender = spawn(config.cinema4d_path, ['-nogui', '-render', program.render]);
    c4dRender.stdout.on('data', function(data) {
      //console.log('VERSION: '+utils.getVersionFromStdout(data.toString()) );
      if (!program.silent) console.log(data.toString());
    });
    c4dRender.stderr.on('data', function(data) {
      if (!program.silent) console.log('Error: '+data.toString());
    });
    // c4dRender.on('close', function(code) {
    //   if (!program.silent) console.log('Closed with code: '+code);
    // });
  }

}
