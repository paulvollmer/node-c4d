/**
 * Log some data if the silent mode is not defined.
 *
 * @param {Object} d The data object comming from commander.js.
 * @parma {String} s The string we want to log to the console.
 * @api private
 */
exports.log = function(d, s) {
  if(d.silent === undefined) {
    console.log(s);
  }
}

/**
 * Parse the CINEMA 4D version froun stdout data.
 */
exports.getVersionFromStdout = function(data) {
  var version = '0'
  if (data.indexOf('Starting CINEMA 4D') != -1) {
    var tmpVersion = data.split('Starting CINEMA 4D ');
    tmpVersion2 = tmpVersion[1].split(' ...');
    version = tmpVersion2[0];
  };
  return version;
}
