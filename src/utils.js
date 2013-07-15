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
