/*
 * Module dependencies.
 */
var spawn = require('child_process').spawn;
var utils = require('./utils.js');
var report = require('./report.js');
var cinema4d = require('./cinema4d.js');

exports.report = report;
exports.app = cinema4d;

/**
 * This is the main render function.
 *
 * @param {Object} d
 * @public
 */
exports.render = function(d, callback) {
  /* Check if a filepath is set. if no filepath is set, we cannot render... */
  if (d.filepath === undefined) {
    utils.error('No CINEMA 4D file to render. Check the examples by running "c4d --help"');
  }
  /* Call the render... */
  else {
    execCinemaRender(d, function(c) {
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
function execCinemaRender(d, callback) {
  /* Print the d object. used for development and debugging */
  //console.log(d);

  /* This is the cli options array we need to execute with the spawn function. */
  var tmpOptionsArray = checkOptions(d);
  /* Save the stdout, stderr data to variable. */
  var tmpStdoutData = [];
  var tmpStderrData = [];

  /* Execute the CINEMA 4D commandline interface. */
  var c4dRender = spawn(cinema4d.getPath(), tmpOptionsArray);
  c4dRender.stdout.on('data', function(data) {
    //console.log('VERSION: '+utils.getVersionFromStdout(data.toString()) );
    utils.log(d.silent, data.toString());
    tmpStdoutData.push(data.toString());
  });
  c4dRender.stderr.on('data', function(data) {
    utils.log(d.silent, 'Error: '+data.toString());
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
 * Check the Options comming from commander.js
 *
 * @param {Object} d
 * @return {Array}
 * @private
 */
function checkOptions(d) {
  var arr = [];

  arr.push(cinema4d.render.render.options[0]);
  arr.push(d.filepath);

  /* Check the different options... */
  if (d.frame !== undefined) {
    arr.push.apply(arr, cinema4d.optionFrame(d.frame));
  };
  if (d.oimage !== undefined) {
    arr.push.apply(arr, cinema4d.optionImage(d.oimage));
  };
  if (d.omultipass !== undefined) {
    arr.push.apply(arr, cinema4d.optionMultipass(d.omultipass));
  };
  if (d.oformat !== undefined) {
    arr.push.apply(arr, cinema4d.optionFormat(d.oformat));
  };
  if (d.oresolution !== undefined) {
    arr.push.apply(arr, cinema4d.optionResolution(d.oresolution));
  };
  if (d.threads !== undefined) {
    arr.push.apply(arr, cinema4d.optionThreads(d.threads));
  };
  if (d.gui === undefined) {
    arr.push(cinema4d.general.nogui.options[0]);
  };

  return arr;
}
