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
var pkg = require('../package.json');
var c4d = require('../src/index.js');
var utils = require('../src/utils.js');

/**
 * The cli options.
 */
program
  .version(pkg.version)
  .option('-r, --render [filepath]', c4d.app.render.render.description)
  .option('-f, --frame [from,to,step]', c4d.app.render.frame.description)
  .option('-i, --oimage [imagename]', c4d.app.render.oimage.description)
  .option('-m, --omultipass [imagename]', c4d.app.render.omultipass.description)
  .option('-a, --oformat [imageformat]', c4d.app.render.oformat.description)
  .option('-e, --oresolution [width,height]', c4d.app.render.oresolution.description)
  .option('-t, --threads [threadcnt]', c4d.app.render.threads.description)
  .option('-g, --gui', 'start with user interface')
  .option('-s, --silent', 'silent mode. don\'t output anything')
  .option('-c, --report [filepath]', 'save the CINEMA 4D stdout to a json file. if no filepath is set, write file to the current working directory')
program.on('--help', function() {
  console.log('  Description:');
  console.log('');
  console.log('    '+pkg.description);
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    # render a file');
  console.log('    $ c4d --render /path/to/your/file.c4d');
  console.log('');
  console.log('    # render a file and override the resolution');
  console.log('    $ c4d --render /path/to/your/file.c4d --oresolution 1500,1000');
  console.log('');
  console.log('    # render a file from frame 0 to 100');
  console.log('    $ c4d --render /path/to/your/file.c4d --frame 0,100');
  console.log('');
  console.log('    # render a file and save a report');
  console.log('    $ c4d --render /path/to/your/file.c4d --report');
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
      filepath: program.render,
      frame: program.frame,
      oimage: program.oimage,
      omultipass: program.omultipass,
      oformat: program.oformat,
      oresolution: program.oresolution,
      threads: program.threads,
      gui: program.gui,
      silent: program.silent,
      report: program.report
    });
  }
}
