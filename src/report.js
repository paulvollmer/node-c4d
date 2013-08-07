/**
 * Module dependencies.
 */
var fs = require('fs');
var utils = require('./utils.js');

/**
 * Filename of the report file.
 */
var filename = 'report.txt';

/**
 * Write a report text file.
 *
 * @param {String} filepath
 * @param {String} data
 * @param {Boolean} silent
 */
exports.write = function(filepath, data, silent) {
  /*
   * If no filepath is set...
   */
  if (filepath === true) {
    fs.writeFile(filename, data);
    utils.log(silent, 'Report saved to current working directory');
  }
  /*
   * If a filepath is set...
   */
  else {
  	var tmpPath = filepath+'/'+filename;
    fs.writeFile(tmpPath, data);
    utils.log(silent, 'Report saved to \''+tmpPath+'\'');
  }
}
