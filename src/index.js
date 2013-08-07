/**
 * Module dependencies.
 */
var spawn = require('child_process').spawn;
var utils = require('./utils.js');
var report = require('./report.js');

/**
 * The default path to the CINEMA 4D Application.
 *
 * @api private
 */
var cinema4d_path = '/Applications/MAXON/CINEMA\ 4D R14/CINEMA\ 4D.app/Contents/MacOS/CINEMA\ 4D';

/**
 * Set the path to the CINEMA 4D Application.
 *
 * @param {String} path
 * @api public
 */
exports.setApplicationPath = function(path) {
  cinema4d_path = path;
}

/**
 * Get the path to the CINEMA 4D Application.
 *
 * @return {String}
 * @api public
 */
exports.getApplicationPath = function() {
  return cinema4d_path;
}

/**
 * This is the main render function.
 *
 * @param {Object} d
 * @api public
 */
exports.render = function(d) {
  // Check if a filepath is set. if no filepath is set, we cannot render...
  if (d.filepath === undefined) {
    utils.log(d.silent, 'No CINEMA 4D file to render. check the examples by running "c4d --help"');
  }
  // Call the render...
  else {
    execCinemaRender(d);
  }
}

/**
 * This function execute the CINEMA 4D commandline interface with -render option.
 *
 * @param {Object} d
 * @api private
 */
function execCinemaRender(d) {
  // Print the d object. used for development and debugging
  //console.log(d);

  // This is the cli options array we need to execute with the spawn function.
  var tmpOptionsArray = checkOptions(d);
  // Save the stdout data to this variable.
  var tmpStdoutData = '';

  // Execute the CINEMA 4D commandline interface.
  var c4dRender = spawn(cinema4d_path, tmpOptionsArray);
  c4dRender.stdout.on('data', function(data) {
    //console.log('VERSION: '+utils.getVersionFromStdout(data.toString()) );
    utils.log(d.silent, data.toString());
    tmpStdoutData += data.toString();
  });
  c4dRender.stderr.on('data', function(data) {
    utils.log(d.silent, 'Error: '+data.toString());
  });
  c4dRender.on('close', function(code) {
    if (d.report) {
      report.write(d.report, tmpStdoutData, d.silent);
    };
    //utils.log(d.silent, 'Closed with code: '+code);
  });
}

/**
 * Check the Options comming from commander.js
 *
 * @param {Object} d
 * @return {Array}
 * @api private
 */
function checkOptions(d) {
  var tmpOptionsArray = [];

  tmpOptionsArray.push('-render');
  tmpOptionsArray.push(d.filepath);

  // Check the different options...
  if (d.frame !== undefined) {
    tmpOptionsArray.push('-frame');
    var tmpFrame = d.frame.split(',');
    // Check how many parameter we add to the tmpOptionsArray.
    if (tmpFrame.length === 1) {
      tmpOptionsArray.push(tmpFrame[0]);
    }
    if (tmpFrame.length === 2) {
      tmpOptionsArray.push(tmpFrame[0]);
      tmpOptionsArray.push(tmpFrame[1]);
    }
    if (tmpFrame.length === 3) {
      tmpOptionsArray.push(tmpFrame[0]);
      tmpOptionsArray.push(tmpFrame[1]);
      tmpOptionsArray.push(tmpFrame[2]);
    }
  };
  if (d.oimage !== undefined) {
    tmpOptionsArray.push('-oimage');
    tmpOptionsArray.push(d.oimage);
  };
  if (d.omultipass !== undefined) {
    tmpOptionsArray.push('-omultipass');
    tmpOptionsArray.push(d.omultipass);
  };
  if (d.oformat !== undefined) {
    tmpOptionsArray.push('-oformat');
    tmpOptionsArray.push(d.oformat);
  };
  if (d.oresolution !== undefined) {
    tmpOptionsArray.push('-oresolution');
    var tmpResolution = d.oresolution.split(',');
    tmpOptionsArray.push(tmpResolution[0]);
    tmpOptionsArray.push(tmpResolution[1]);
  };
  if (d.threads !== undefined) {
    tmpOptionsArray.push('-threads');
    tmpOptionsArray.push(d.threads);
  };
  if (d.gui === undefined) {
    tmpOptionsArray.push('-nogui');
  };

  return tmpOptionsArray;
}
