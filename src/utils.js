/*
 * Module dependencies.
 */
var clc = require('cli-color');

/**
 * Log some data if the silent mode is not defined or false.
 *
 * @parma {string} message - The string we want to log to the console.
 * @param {boolean} silent - Set the silent mode on or off.
 * @private
 */
exports.log = function(message, silent) {
  if(silent === undefined || silent === false) {
    console.log(clc.green(message));
  }
  return message;
};

/**
 * Print out an error message.
 *
 * @parma {string} message - The string we want to log to the console.
 * @private
 */
exports.error = function(message) {
  var tempMessage = 'E R R O R - '+message;
  console.error(tempMessage);
  return tempMessage;
};

// /**
//  * Parse the CINEMA 4D version froun stdout data.
//  *
//  * @param {Object} data - The cinema4d stdout data.
//  * @private
//  */
// exports.getVersionFromStdout = function(data) {
//   var version = '0'
//   if (data.indexOf('Starting CINEMA 4D') != -1) {
//     var tmpVersion = data.split('Starting CINEMA 4D ');
//     tmpVersion2 = tmpVersion[1].split(' ...');
//     version = tmpVersion2[0];
//   };
//   return version;
// }
