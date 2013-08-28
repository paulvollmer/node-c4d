/**
 * Module dependencies.
 *
 * @private
 */
var fs = require('fs');
var utils = require('./utils.js');

/**
 * Expose `Report`.
 *
 * @private
 */
exports.Report = Report;

/**
 * Initialize a new `Report`.
 *
 * @constructor
 * @public
 */
function Report() {
  /**
   * Filename of the report file.
   *
   * @private
   */
  this.filename = 'report';
  /**
   * Format of the report file.
   *
   * @private
   */
  this.format = 'json';
}

/**
 * Set the name of the report file.
 *
 * @param {string} filename - Filename of the report.
 * @public
 */
Report.prototype.setFilename = function(filename) {
  this.filename = filename;
}

/**
 * Get the name of the report file.
 *
 * @returns {string} The filename of the report. 
 * @public
 */
Report.prototype.getFilename = function() {
  return this.filename;
}

/**
 * Array to store the available report formats.
 *
 * @private
 */
var availableFormats = ['json', 'xml', 'txt'];

/**
 * Set the format of the report.
 *
 * @param {string} format - The following formats can be used: json, xml, txt
 * @public
 */
Report.prototype.setFormat = function(format) {
  for(var i=0; i<availableFormats.length; i++) {
    if (format === availableFormats[i]) {
      this.format = format;
    };
  };
}

/**
 * Get the format of the report.
 *
 * @returns {string} The report format.
 * @public
 */
Report.prototype.getFormat = function() {
  return this.format;
}

/**
 * Write a report text file.
 *
 * @param {string} filepath - The filepath of the report.
 * @param {Object} data - The report data.
 * @param {boolean} [silent] - If true, nothing will be logged to console.
 * @public
 */
Report.prototype.write = function(filepath, data, silent) {
  var tmpFilepath = null;

  /* If a filepath is set... */
  if (filepath === true) {
    tmpFilepath = this.filename+'.'+this.format;
    utils.log(silent, 'Report saving to current working directory.');
  }
  /* If no filepath is set... */
  else {
  	tmpFilepath = filepath+'/'+this.filename+'.'+this.format;
    utils.log(silent, 'Report saving to \''+tmpFilepath+'\'');
  }

  /* Write the file in the defined format. */
  if (this.format === availableFormats[0]) {
    writeJson(tmpFilepath, data);
  }
  else if (this.format === availableFormats[1]) {
    writeXml(tmpFilepath, data);
  }
  else if (this.format === availableFormats[2]) {
    writeTxt(tmpFilepath, data);
  };
}

/**
 * Write a JSON report.
 * 
 * @private
 */
function writeJson(filepath, data) {
  fs.writeFile(filepath, JSON.stringify(data));
}

/**
 * Write a XML report.
 *
 * @private
 */
function writeXml(filepath, data) {
  // TODO: write xml file
}

/**
 * Write a Plaintext report.
 *
 * @private
 */
function writeTxt(filepath, data) {
  var tmpData = 'Time:\n'+data.time+'\n\n';
  tmpData += 'Command options:\n'+JSON.stringify(data.command_options)+'\n\n';
  tmpData += 'Cinema4d stdout:\n'+data.cinema4d_stdout+'\n';
  tmpData += 'Cinema4d stderr:\n'+data.cinema4d_stderr+'\n';
  tmpData += 'Code:\n'+data.code+'\n';
  fs.writeFile(filepath, tmpData);
}

/**
 * Read a report file.
 *
 * @param {string} dir - The report directory.
 * @public
 */
Report.prototype.read = function(dir, callback) {
  /* Check if the dir variable is set */
  var tmpDir = null;
  if (dir === undefined) tmpDir = this.filename+'.json';
  else tmpDir = dir+this.filename+'.json';

  /* Read the file */
  fs.readFile(tmpDir+this.format, 'utf-8', function (err, content) {
    if (err) {
      callback(err);
    }
    var obj = JSON.parse(content);
    callback(obj);
  });
}
