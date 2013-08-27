/*
 * Module dependencies.
 */
var fs = require('fs');
var utils = require('./utils.js');

/**
 * Expose `Report`.
 */
exports.Report = Report;

/**
 * Initialize a new `Report`.
 *
 * @public
 */
function Report() {
  /* Filename of the report file. */
  this.filename = 'report.json';
}

/**
 * Set the name of the report file.
 *
 * @public
 */
Report.prototype.setFilename = function(filename) {
  this.filename = filename;
}

/**
 * Get the name of the report file.
 *
 * @public
 */
Report.prototype.getFilename = function() {
  return this.filename;
}

/**
 * Write a report text file.
 *
 * @param {String} filepath
 * @param {Object} data
 * @param {Boolean} silent
 * @public
 */
Report.prototype.write = function(filepath, data, silent) {
  var tmpFilepath = null;

  /* If a filepath is set... */
  if (filepath === true) {
    tmpFilepath = this.filename;
    utils.log(silent, 'Report saved to current working directory');
  }
  /* If no filepath is set... */
  else {
  	tmpFilepath = filepath+'/'+this.filename;
    utils.log(silent, 'Report saved to \''+tmpFilepath+'\'');
  }

  fs.writeFile(tmpFilepath, JSON.stringify(data));
}

/**
 * Read a report file.
 *
 * @param {String} dir
 * @public
 */
Report.prototype.read = function(dir, callback) {
  /* Check if the dir variable is set */
  var tmpDir = null;
  if (dir === undefined) tmpDir = this.filename;
  else tmpDir = dir+this.filename;

  /* Read the file */
  fs.readFile(tmpDir, 'utf-8', function (err, content) {
    if (err) {
      callback(err);
    }
    var obj = JSON.parse(content);
    callback(obj);
  });
}
