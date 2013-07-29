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

  if (d.silent === undefined) {
  	console.log('silent: '+d.silent);
  } else {
  	console.log('silent: '+d.silent);
  }
  if (d.filename === undefined) console.log('filename: '+d.filename);
  if (d.frame_from === undefined) console.log('frame_from: '+d.frame_from);


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
