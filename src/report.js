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
  this.filename = 'report';
  /* Format of the report file. */
  this.format = 'json';
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
 * Array to store the available report formats.
 *
 * @private
 */
var availableFormats = ['json', 'xml', 'txt'];

/**
 * Set
 *
 * @param format The following formats can be used: json, xml, txt
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
 * Get
 *
 * @public
 */
Report.prototype.getFormat = function() {
  return this.format;
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
 *
 * @private
 */
function writeJson(filepath, data) {
  fs.writeFile(filepath, JSON.stringify(data));
}

/**
 *
 * @private
 */
function writeXml(filepath, data) {
  // TODO: write xml file
}

/**
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
 * @param {String} dir
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
