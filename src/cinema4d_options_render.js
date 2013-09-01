/**
 * Module dependencies.
 *
 * @private
 */
var utils = require('./utils.js');

/**
 * The CINEMA 4D "-render" options and description.
 *
 * @public
 */
exports.render = {
  options: ['-render', 'filename'],
  description: 'specify a file to render',
  getOptionsArray: function(filename) {
    if (filename !== undefined && typeof filename === 'string') {
      var arr = [];
      arr.push(this.options[0]);
      arr.push(filename);
      return arr;
    } else {
      return [];
    }
  }
};

/**
 * The CINEMA 4D "-frame" options and description.
 *
 * @public
 */
exports.frame = {
  options: ['-frame', 'from', 'to', 'step'],
  description: 'specify start frame, end frame and frame step. "to" and "step" are optional',
  getOptionsArray: function(data) {
    if (data !== undefined) {
      var arr = [];
      arr.push(this.options[0]);
      var tmpFrame = data.split(',');
      /* Check how many parameter we add to the `arr`. */
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
    } else {
      return [];
    }
  }
};

/**
 * The CINEMA 4D "-oimage" options and description.
 *
 * @public
 */
exports.oimage = {
  options: ['-oimage', 'imagename'],
  description: 'override the image output path for rendering',
  getOptionsArray: function(imagename) {
    if (imagename !== undefined && typeof imagename === 'string') {
      var arr = [];
      arr.push(this.options[0]);
      arr.push(imagename);
      return arr;
    } else {
      return [];
    }
  }
};

/**
 * The CINEMA 4D "-omultipass" options and description.
 *
 * @public
 */
exports.omultipass = {
  options: ['-omultipass', 'imagename'],
  description: 'override the multipass output path for rendering',
  getOptionsArray: function(imagename) {
    if (imagename !== undefined && typeof imagename === 'string') {
      var arr = [];
      arr.push(this.options[0]);
      arr.push(imagename);
      return arr;
    } else {
      return [];
    }
  }
};

/**
 * The CINEMA 4D "-oformat" options and description.
 *
 * @public
 */
exports.oformat = {
  options: ['-oformat', 'imageformat'],
  description: 'override the image output format to TIFF/TGA/BMP/IFF/JPG/PICT/PSD/PSB/RLA/RPF/B3D',
  getOptionsArray: function(data) {
    if (data !== undefined) {
      /* Check if the data string is correct. */
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
        var arr = [];
        arr.push(this.options[0]);
        arr.push(data);
        return arr;
      }
      /* If the data string is not correct,
         push `TIFF` as default data string. */
      else {
        return [this.options[0], 'TIFF'];
      }
    } else {
      return [];
    }
  }
};

/**
 * The CINEMA 4D "-oresolution" options and description.
 *
 * @public
 */
exports.oresolution = {
  options: ['-oresolution', 'width', 'height'],
  description: 'override output image size',
  getOptionsArray: function(data) {
    if (data !== undefined) {
      /* Splite the data string to get the new width and height */
      var tmpResolution = data.split(',');
      /* Check if the data is correct */
      if (tmpResolution.length === 2) {
        var arr = [];
        arr.push(this.options[0]);
        arr.push(tmpResolution[0]);
        arr.push(tmpResolution[1]);
        return arr;
      } else {
        utils.error('Not correct resolution, we return nothing to render with the file settings.');
        return [];
      }
    } else {
      return [];
    }
  }
};

/**
 * The CINEMA 4D "-threads" options and description.
 *
 * @public
 */
exports.threads = {
  options: ['-threads', 'threadcnt'],
  description: 'specify number of threads (0 for auto-detection)',
  getOptionsArray: function(threadcnt) {
    if (threadcnt !== undefined) {
      var arr = [];
      arr.push(this.options[0]);
      /* Check if the threadcnt variable is a number. */
      if (typeof threadcnt === 'number') {
        arr.push(threadcnt);
      }
      /* If it is not a number, push 0 as default variable. */
      else {
        arr.push(0);
      }
      return arr;
    } else {
      return [];
    }
  }
};
