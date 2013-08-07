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
 *
 * @api private
 */
function writer(src, data) {
  fs.writeFile(src, JSON.stringify(data));
}

/**
 * Read a report file.
 *
 * @param {String} dir
 * @api public
 */
exports.read = function(dir, callback) {
  tmp = fs.readFile(readDirChecker(dir), 'utf-8', function (err, content) {
    if (err) {
      callback(err);
    }
    var obj = JSON.parse(content);
    callback(obj);
  });
}

/**
 * small reader helper
 *
 * @api private
 */
function readDirChecker(dir) {
  if (dir === undefined) {
    //console.log('No dir set');
    return filename;
  }
  else {
    //console.log('This dir set: '+dir);
    return dir+filename;
  }
}
