/*
 * Module dependencies.
 */
var clc = require('cli-color');

/**
 * Log some data if the silent mode is not defined or false.
 *
 * @param {boolean} silent - Set the silent mode on or off.
 * @parma {string} str - The string we want to log to the console.
 * @private
 */
exports.log = function(silent, str) {
  if(silent === undefined || silent === false) {
    console.log(clc.green(str));
  }
}

/**
 * Print out an error message.
 *
 * @parma {string} str - The string we want to log to the console.
 * @private
 */
exports.error = function(str) {
  console.error('E R R O R - '+str);
}

/**
 * Parse the CINEMA 4D version froun stdout data.
 *
 * @param {Object} data - The cinema4d stdout data.
 * @private
 */
exports.getVersionFromStdout = function(data) {
  var version = '0'
  if (data.indexOf('Starting CINEMA 4D') != -1) {
    var tmpVersion = data.split('Starting CINEMA 4D ');
    tmpVersion2 = tmpVersion[1].split(' ...');
    version = tmpVersion2[0];
  };
  return version;
}
