/**
 * Module dependencies.
 *
 * @private
 */
var utils = require('./utils.js');

/**
 * Object to store the available report formats.
 *
 * @private
 */
var FORMAT = {
  JSON: {id: 0, name: 'json', suffix: '.json'},
  XML:  {id: 1, name: 'xml',  suffix: '.xml'},
  TXT:  {id: 2, name: 'txt',  suffix: '.txt'},
};

/**
 * Expose `Reportformat`.
 *
 * @private
 */
exports.Reportformat = Reportformat;

/**
 * Initialize a new `Reportformat`.
 *
 * @constructor
 * @public
 */
function Reportformat() {
  /**
   * Format of the report file.
   *
   * @private
   */
  this.data = FORMAT.JSON.name;
}

/**
 * Check the report format.
 *
 * @param {number|string} format - The format to check.
 * @public
 */
Reportformat.prototype.check = function(format) {
  if (format === FORMAT.JSON.name) {
    return true;
  } else if (format === FORMAT.XML.name) {
    return true;
  } else if (format === FORMAT.TXT.name) {
    return true;
  } else {
    return false;
  };
}

/**
 * Set the format of the report.
 *
 * @param {string} format - The following formats can be used: json, xml, txt
 * @public
 */
Reportformat.prototype.set = function(format) {
  if (this.check(format)) {
    this.data = format;
  } else {
    utils.error('Not correct format. Format set to default (json).');
    this.data = FORMAT.JSON.name;
  };
}

/**
 * Get the format of the report.
 *
 * @returns {string} The report format.
 * @public
 */
Reportformat.prototype.get = function() {
  return this.data;
}
