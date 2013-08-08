/**
 * The default path to the CINEMA 4D Application.
 *
 * @private
 */
var cinema4d_path = '/Applications/MAXON/CINEMA\ 4D R14/CINEMA\ 4D.app/Contents/MacOS/CINEMA\ 4D';

/**
 * Set the path to the CINEMA 4D Application.
 *
 * @param {string} path Path to CINEMA 4D
 * @public
 */
exports.setPath = function(path) {
  cinema4d_path = path;
}

/**
 * Get the path to the CINEMA 4D Application.
 *
 * @return {String}
 * @public
 */
exports.getPath = function() {
  return cinema4d_path;
}

/**
 * Copycat of the CINEMA 4D --help General Options.
 *
 * @public
 */
var general = {
  nogui: {
    options: ['-nogui'],
    description: 'start without user interface'
  },
  license: {
    options: ['-license', 'ip', 'port'],
    description: 'specifies the license server'
  },
  homedir: {
    options: ['-homedir'],
    description: 'define a custom home write directory'
  },
  noopengl: {
    options: ['-noopengl'],
    description: 'disable OpenGL and avoid loading OpenGL libraries'
  },
  oglversion: {
    options: ['-oglversion='],
    description: 'force a specific OpenGL version. xxx must be 100 * (major version) + (minor version)'
  },
  server: {
    options: ['-server'],
    description: 'start c4d as a render server'
  },
  client: {
    options: ['-client'],
    description: 'start c4d as a render client'
  },
  title: {
    options: ['-title'],
    description: 'set the window title'
  },
  layout: {
    options: ['-layout', 'filename'],
    description: 'use a custom startup layout'
  },
  crashtest: {
    options: ['-crashtest'],
    description: 'causes an exception to test the built-in signal handler'
  },
  nocrashhandler: {
    options: ['-nocrashhandler'],
    description: 'suppress use of the application\'s crash handler'
  },
  nogui_nothreads: {
    options: ['-nogui_nothreads'],
    description: 'special commandline debug mode'
  },
  debug: {
    options: ['-debug'],
    description: 'enable debug output'
  }
};

exports.general = general;

/**
 * Copycat of the CINEMA 4D --help Render Options.
 *
 * @public
 */
var render = {
  render: {
    options: ['-render', 'filename'],
    description: 'specify a file to render'
  },
  frame: {
    options: ['-frame', 'from', 'to', 'step'],
    description: 'specify start frame, end frame and frame step. \'to\' and \'step\' are optional'
  },
  oimage: {
    options: ['-oimage', 'imagename'],
    description: 'override the image output path for rendering'
  },
  omultipass: {
    options: ['-omultipass', 'imagename'],
    description: 'override the multipass output path for rendering'
  },
  oformat: {
    options: ['-oformat', 'imageformat'],
    description: 'override the image output format to TIFF/TGA/BMP/IFF/JPG/PICT/PSD/PSB/RLA/RPF/B3D'
  },
  oresolution: {
    options: ['-oresolution', 'width', 'height'],
    description: 'override output image size'
  },
  threads: {
    options: ['-threads', 'threadcnt'],
    description: 'specify number of threads (0 for auto-detection)'
  }
};

exports.render = render;

/**
 * 
 * @return Array
 * @public
 */
exports.optionFrame = function(data) {
  var arr = [];
  arr.push(render.frame.options[0]);
  var tmpFrame = data.split(',');
  // Check how many parameter we add to the `arr`.
  if (tmpFrame.length === 1) {
    arr.push(tmpFrame[0]);
  }
  if (tmpFrame.length === 2) {
    arr.push(tmpFrame[0]);
    arr.push(tmpFrame[1]);
  }
  if (tmpFrame.length === 3) {
    arr.push(tmpFrame[0]);
    arr.push(tmpFrame[1]);
    arr.push(tmpFrame[2]);
  }
  return arr;
}

/**
 * 
 * @return Array
 * @public
 */
exports.optionImage = function(data) {
  var arr = [];
  arr.push(render.oimage.options[0]);
  arr.push(data);
  return arr;
}

/**
 * 
 * @return Array
 * @public
 */
exports.optionMultipass = function(data) {
  var arr = [];
  arr.push(render.omultipass.options[0]);
  arr.push(data);
  return arr;
}

/**
 * 
 * @return Array
 * @public
 */
exports.optionFormat = function(data) {
  /* Check the data string */
  if (data === 'TIFF' ||
      data === 'TGA'  ||
      data === 'BMP'  ||
      data === 'IFF'  ||
      data === 'JPG'  ||
      data === 'PICT' ||
      data === 'PSD'  ||
      data === 'PSB'  ||
      data === 'RLA'  ||
      data === 'RPF'  ||
      data === 'B3D') {
    //console.log('Format data correct.');
    var arr = [];
    arr.push(render.oformat.options[0]);
    arr.push(data);
    return arr;
  }
  /* If the data string is not correct, add `TIFF` as data string. */
  else {
    //console.log('Not correct format.');
    return [render.oformat.options[0], 'TIFF'];
  };
}

/**
 * 
 * @return Array
 * @public
 */
exports.optionResolution = function(data) {
  /* Splite the data string to get the new width and height */
  var tmpResolution = data.split(',');
  /* Check if the data is correct */
  if (tmpResolution.length === 2) {
    console.log('Resolution data correct.');
    var arr = [];
    arr.push(render.oresolution.options[0]);
    arr.push(tmpResolution[0]);
    arr.push(tmpResolution[1]);
    return arr;
  } else {
    console.log('Not correct resolution, we return nothing to render with the file settings.');
    return '';
  };
}

/**
 * 
 * @return Array
 * @public
 */
exports.optionThreads = function(data) {
  var arr = [];
  arr.push(render.threads.options[0]);
  arr.push(data);
  return arr;
}
