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
  } else {
    log(d, 'RENDER---------');
  }


  var c4dRender = spawn(cinema4d_path, ['-nogui', '-render', d.filename]);
  c4dRender.stdout.on('data', function(data) {
    //console.log('VERSION: '+utils.getVersionFromStdout(data.toString()) );
    if (!d.silent) {
    	console.log(data.toString());
    }
  });
  c4dRender.stderr.on('data', function(data) {
    if (!d.silent) {
    	console.log('Error: '+data.toString());
    }
  });
  // c4dRender.on('close', function(code) {
  //   if (!program.silent) console.log('Closed with code: '+code);
  // });

  //if (!data.silent) console.log('Render '+data);

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
