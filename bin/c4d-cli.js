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
var utils = require('../src/utils.js');
var c4d = require('../src/index.js');

/**
 * The cli options.
 */
program
  .version(pkg.version)
  .option('-r, --render [filepath]', 'specify a file to render')
  .option('-f, --frame [from,to,step]', 'specify start frame, end frame and frame step. "to" and "step" are optional')
  .option('-i, --oimage [imagename]', 'override the image output path for rendering')
  .option('-m, --omultipass [imagename]', 'override the multipass output path for rendering')
  .option('-a, --oformat [imageformat]', 'override the image output format to TIFF/TGA/BMP/IFF/JPG/PICT/PSD/PSB/RLA/RPF/B3D')
  .option('-e, --oresolution [width,height]', 'override output image size')
  .option('-t, --threads [threadcnt]', 'specify number of threads (0 for auto-detection)')
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
