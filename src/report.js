/**
 * Module dependencies.
 *
 * @private
 */
var fs = require('fs');
var utils = require('./utils.js');
var reportformat = require('./reportformat.js');

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
  this.json = new reportformat.Reportformat('json', '.json');
  this.txt = new reportformat.Reportformat('txt', '.txt');
  /**
   * Format of the report file.
   *
   * @private
   */
  this.format = this.json;
  /**
   * The report filepath.
   *
   * @private
   */
  this.filepath = 'report';
}

/**
 * Get the report format.
 *
 * @returns {string} The format of the report file.
 * @public
 */
Report.prototype.getFormat = function() {
  return this.format.getName();
};

/**
 * Set the report format.
 *
 * @param {string} format - The format of the report file.
 * @public
 */
Report.prototype.setFormat = function(format) {
  if (format === this.json.name) {
    this.format = this.json;
    return true;
  }
  else if (format === this.txt.name) {
    this.format = this.txt;
    return true;
  }
  else {
    return false;
  }
};

/**
 * Get the path of the report file.
 *
 * @returns {string} The path of the report file.
 * @public
 */
Report.prototype.getFilepath = function() {
  return this.filepath;
};

/**
 * Set the path of the report file.
 *
 * @param {string} filepath - The path of the report file.
 * @public
 */
Report.prototype.setFilepath = function(filepath) {
  this.filepath = filepath;
};

/**
 * Write a JSON report.
 * 
 * @private
 */
function writeJson(filepath, data) {
  var tmpData = JSON.stringify(data);
  fs.writeFileSync(filepath, tmpData);
}

/**
 * Write a Plaintext report.
 *
 * @private
 */
function writeTxt(filepath, data) {
  /* Create the string we want to write. */
  var tmpData = 'Time:\n'+data.time+'\n\n';
  tmpData += 'Command options:\n'+JSON.stringify(data.command_options)+'\n\n';
  tmpData += 'Cinema4d stdout:\n'+data.cinema4d_stdout+'\n';
  tmpData += 'Cinema4d stderr:\n'+data.cinema4d_stderr+'\n';
  tmpData += 'Code:\n'+data.code+'\n';
  /* Write the file. */
  fs.writeFileSync(filepath, tmpData);
}

/**
 * Write a report text file.
 *
 * @param {Object} data - The report data.
 * @param {boolean} [silent] - If true, nothing will be logged to console.
 * @public
 */
Report.prototype.write = function(data, silent) {
  var tmpFilepath = this.filepath+this.format.suffix;
  
  /* Write the file in the defined format. */
  if (this.json.nameEquals(this.format.name)) {
    writeJson(tmpFilepath, data);
  }
  else if (this.txt.nameEquals(this.format.name)) {
    writeTxt(tmpFilepath, data);
  }

  utils.log('Report saved to \''+tmpFilepath+'\'', silent);
  return this.format.name;
};

/**
 * Read a report file.
 *
 * @param {string} filepath - The report filepath.
 * @public
 */
Report.prototype.read = function(filepath, callback) {
  /* Read the file */
  fs.readFile(filepath, 'utf-8', function (err, content) {
    if (err) {
      callback(err);
    }
    var obj = JSON.parse(content);
    callback(obj);
    return obj;
  });
};
