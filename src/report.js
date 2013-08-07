/**
 * Module dependencies.
 */
var fs = require('fs');
var utils = require('./utils.js');

/**
 * Filename of the report file.
 */
var filename = 'report.json';

/**
 * Write a report text file.
 *
 * @param {String} filepath
 * @param {Object} data
 * @param {Boolean} silent
 */
exports.write = function(filepath, data, silent) {
  /*
   * If no filepath is set...
   */
  if (filepath === true) {
    writer(filename, data);
    utils.log(silent, 'Report saved to current working directory');
  }
  /*
   * If a filepath is set...
   */
  else {
  	var tmpPath = filepath+'/'+filename;
    writer(tmpPath, data);
    utils.log(silent, 'Report saved to \''+tmpPath+'\'');
  }
}

/**
 * small file write helper.
 */
function writer(src, data) {
  fs.writeFile(src, JSON.stringify(data));
}
