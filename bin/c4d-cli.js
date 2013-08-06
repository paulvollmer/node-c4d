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
  .option('-r, --render [filepath]', 'specify a file to render')
  .option('-f, --frame [from,to,step]', 'specify start frame, end frame and frame step. "to" and "step" are optional')
  .option('-i, --oimage [imagename]', 'override the image output path for rendering')
  .option('-m, --omultipass [imagename]', 'override the multipass output path for rendering')
  .option('-f, --oformat [imageformat]', 'override the image output format to TIFF/TGA/BMP/IFF/JPG/PICT/PSD/PSB/RLA/RPF/B3D')
  .option('-e, --oresolution [width,height]', 'override output image size')
  .option('-t, --threads [threadcnt]', 'specify number of threads (0 for auto-detection)')
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
      filepath: program.render,
      frame: program.frame,
      oimage: program.oimage,
      omultipass: program.omultipass,
      oformat: program.oformat,
      oresolution: program.oresolution,
      threads: program.threads,
      silent: program.silent
    });
  }
}
