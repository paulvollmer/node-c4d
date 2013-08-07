/**
 * Module dependencies.
 */
var fs = require('fs');

/**
 * Write a report text file.
 *
 * @param {String} data
 * @param {String} filepath
 */
exports.write = function(data, filepath) {
  /*
   * If no filepath is set...
   */
  if (filepath === true) {
    fs.writeFile('report.txt', data);
  }
  /*
   * If a filepath is set...
   */
  else {
    fs.writeFile(filepath+'/report.txt', data);
  }
}
