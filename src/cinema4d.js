/**
 * Module dependencies.
 *
 * @private
 */
var utils = require('./utils.js');

/**
 * Expose `Cinema4D`.
 *
 * @private
 */
exports.Cinema4D = Cinema4D;

/**
 * Initialize a new `Cinema4D`.
 *
 * @constructor
 * @public
 */
function Cinema4D() {
  /* The default path to the CINEMA 4D Application. */
  this.path = '/Applications/MAXON/CINEMA\\ 4D R14/CINEMA\\ 4D.app/Contents/MacOS/CINEMA\\ 4D';
}

/**
 * Set the path to the CINEMA 4D Application.
 *
 * @param {string} path Path to CINEMA 4D
 * @public
 */
Cinema4D.prototype.setPath = function(path) {
  this.path = path;
};

/**
 * Get the path to the CINEMA 4D Application.
 *
 * @return {String}
 * @public
 */
Cinema4D.prototype.getPath = function() {
  return this.path;
};
