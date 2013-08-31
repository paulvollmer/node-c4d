/**
 * Module dependencies.
 *
 * @private
 */
var spawn = require('child_process').spawn;
var utils = require('./utils.js');
var report_class = require('./report.js');
var cinema4d_class = require('./cinema4d.js');

var report = new report_class.Report();
var cinema4d = new cinema4d_class.Cinema4D();

/**
 * Expose `C4D`.
 *
 * @private
 */
exports = module.exports = new C4D;

/**
 * Initialize a new `C4D`.
 *
 * @constructor
 * @public
 */
function C4D() {
  this.report = report;
  this.app = cinema4d;
}

/**
 * This is the main render function.
 *
 * @param {Object} d - The render settings.
 * @param {string} d.filepath - The path to the CINEMA 4D file.
 * @public
 */
C4D.prototype.render = function(d, callback) {
  /* Check if a filepath is set. if no filepath is set, we cannot render... */
  if (d.filepath === undefined) {
    utils.error('No CINEMA 4D file to render. Check the examples by running "c4d --help"');
  }
  /* Call the render... */
  else {
    this.execCinemaRender(d, function(c) {
      callback(c);
    });
  }
}

/**
 * This function execute the CINEMA 4D commandline interface with -render option.
 *
 * @param {Object} d
 * @private
 */
C4D.prototype.execCinemaRender = function(d, callback) {
  /* Print the d object. used for development and debugging */
  //console.log(d);

  /* This is the cli options array we need to execute with the spawn function. */
  var tmpOptionsArray = this.createOptionsArray(d);
  /* Save the stdout, stderr data to variable. */
  var tmpStdoutData = [];
  var tmpStderrData = [];

  /* Execute the CINEMA 4D commandline interface. */
  var c4dRender = spawn(cinema4d.getPath(), tmpOptionsArray);
  c4dRender.stdout.on('data', function(data) {
    //console.log('VERSION: '+utils.getVersionFromStdout(data.toString()) );
    utils.log(data.toString(), d.silent);
    tmpStdoutData.push(data.toString());
  });
  c4dRender.stderr.on('data', function(data) {
    utils.log('Error: '+data.toString(), d.silent);
    tmpStderrData.push(data.toString());
  });
  c4dRender.on('close', function(code) {
    if (d.report) {
      var tmpData = {
        time: Date(),
        command_options: d,
        cinema4d_stdout: tmpStdoutData,
        cinema4d_stderr: tmpStderrData,
        code: code
      };
      report.write(d.report, tmpData, d.silent);
      callback(tmpData);
    };
    //utils.log(d.silent, 'Closed with code: '+code);
  });
}

/**
 * Create an array with options the Cinema 4D render can use.
 * The options comes from commander.js.
 *
 * @param {Object} data
 * @return {Array}
 * @private
 */
C4D.prototype.createOptionsArray = function(data) {
  var arr = [];

  arr.push(cinema4d.render.render.options[0]);
  arr.push(data.filepath);

  /* Check the different options... */
  if (data.frame !== undefined) {
    arr.push.apply(arr, cinema4d.optionFrame(data.frame));
  };
  if (data.oimage !== undefined) {
    arr.push.apply(arr, cinema4d.optionImage(data.oimage));
  };
  if (data.omultipass !== undefined) {
    arr.push.apply(arr, cinema4d.optionMultipass(data.omultipass));
  };
  if (data.oformat !== undefined) {
    arr.push.apply(arr, cinema4d.optionFormat(data.oformat));
  };
  if (data.oresolution !== undefined) {
    arr.push.apply(arr, cinema4d.optionResolution(data.oresolution));
  };
  if (data.threads !== undefined) {
    arr.push.apply(arr, cinema4d.optionThreads(data.threads));
  };
  if (data.gui === undefined) {
    arr.push(cinema4d.general.nogui.options[0]);
  };

  return arr;
}
