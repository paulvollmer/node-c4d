/**
 * Module dependencies.
 */
var spawn = require('child_process').spawn;

/**
 * The default path to the CINEMA 4D Application.
 */
var cinema4d_path = '/Applications/MAXON/CINEMA\ 4D R14/CINEMA\ 4D.app/Contents/MacOS/CINEMA\ 4D';

/**
 * Set the path to the CINEMA 4D Application.
 */
exports.setApplicationPath = function(path) {
  cinema4d_path = path;
}

/**
 * This is the main render function.
 */
exports.render = function(d) {
  // Print the d object. used for development and debugging
  console.log(d);

  // Check if a filepath is set. if no filepath is set, we cannot render...
  if (d.filepath === undefined) {
    log(d, 'No CINEMA 4D file to render.');
  }
  // Call the render...
  else {
    // This is the cli options array we need to execute with the spawn function.
    var tmpOptionsArray = [];
    tmpOptionsArray.push('-nogui');
    tmpOptionsArray.push('-render');
    tmpOptionsArray.push(d.filepath);

    // Check the different options...
    if (d.oimage !== undefined) {
      tmpOptionsArray.push('-oimage');
      tmpOptionsArray.push(d.oimage);
    };
    if (d.omultipass !== undefined) {
      tmpOptionsArray.push('-omultipass');
      tmpOptionsArray.push(d.omultipass);
    };
    if (d.oformat !== undefined) {
      tmpOptionsArray.push('-oformat');
      tmpOptionsArray.push(d.oformat);
    };
    if (d.threads !== undefined) {
      tmpOptionsArray.push('-threads');
      tmpOptionsArray.push(d.threads);
    };

    //log(d, tmpOptionsArray);

    // Execute the CINEMA 4D commandline interface.
    var c4dRender = spawn(cinema4d_path, tmpOptionsArray);
    c4dRender.stdout.on('data', function(data) {
      //console.log('VERSION: '+utils.getVersionFromStdout(data.toString()) );
      log(d, data.toString());
    });
    c4dRender.stderr.on('data', function(data) {
      log(d, 'Error: '+data.toString());
    });
    c4dRender.on('close', function(code) {
      //log(d, 'Closed with code: '+code);
    });
  }
}

/**
 * Log some data if the silent mode is not defined.
 *
 * @param d The data object.
 * @parma s The string we want to print out.
 */
function log(d, s) {
  if(d.silent === undefined) {
    console.log(s);
  }
}
