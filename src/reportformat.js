/**
 * Module dependencies.
 *
 * @private
 */
var utils = require('./utils.js');

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
 * @param {string} name - Name of the format.
 * @param {string} suffix - Suffix of the format.
 * @public
 */
function Reportformat(name, suffix) {
  /**
   * Variable to store the format name.
   *
   * @private
   */
  this.name = name;
  /**
   * Variable to store the format suffix.
   *
   * @private
   */
  this.suffix = suffix;
}

/**
 * Get the format name.
 *
 * @returns {string} The report format.
 * @public
 */
Reportformat.prototype.getName = function() {
  return this.name;
}

/**
 * Get the format suffix.
 *
 * @returns {string} The report format.
 * @public
 */
Reportformat.prototype.getSuffix = function() {
  return this.suffix;
}

/**
 * Check if the format name equals the parameter name.
 *
 * @param {string} name - The format name.
 * @public
 */
Reportformat.prototype.nameEquals = function(name) {
  if (name === this.name) {
    return true;
  } else {
    return false;
  };
}

/**
 * Check if the format suffix equals the parameter suffix.
 *
 * @param {string} suffix - The format suffix.
 * @public
 */
Reportformat.prototype.suffixEquals = function(suffix) {
  if (suffix === this.suffix) {
    return true;
  } else {
    return false;
  };
}
