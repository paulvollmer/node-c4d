/**
 * The CINEMA 4D "-nogui" options and description.
 *
 * @public
 */
 exports.nogui = {
  options: ['-nogui'],
  description: 'start without user interface',
  getOptionsArray: function() {
    return [this.options[0]];
  }
};

/**
 * The CINEMA 4D "-license" options and description.
 *
 * @public
 */
exports.license = {
  options: ['-license', 'ip', 'port'],
  description: 'specifies the license server'
};

/**
 * The CINEMA 4D "-homedir" options and description.
 *
 * @public
 */
exports.homedir = {
  options: ['-homedir'],
  description: 'define a custom home write directory'
};

/**
 * The CINEMA 4D "-noopengl" options and description.
 *
 * @public
 */
exports.noopengl = {
  options: ['-noopengl'],
  description: 'disable OpenGL and avoid loading OpenGL libraries'
};

/**
 * The CINEMA 4D "-oglversion" options and description.
 *
 * @public
 */
exports.oglversion = {
  options: ['-oglversion='],
  description: 'force a specific OpenGL version. xxx must be 100 * (major version) + (minor version)'
};

/**
 * The CINEMA 4D "-server" options and description.
 *
 * @public
 */
exports.server = {
  options: ['-server'],
  description: 'start c4d as a render server'
};

/**
 * The CINEMA 4D "-client" options and description.
 *
 * @public
 */
exports.client = {
  options: ['-client'],
  description: 'start c4d as a render client'
};

/**
 * The CINEMA 4D "-title" options and description.
 *
 * @public
 */
exports.title = {
  options: ['-title'],
  description: 'set the window title'
};

/**
 * The CINEMA 4D "-layout" options and description.
 *
 * @public
 */
exports.layout = {
  options: ['-layout', 'filename'],
  description: 'use a custom startup layout'
};

/**
 * The CINEMA 4D "-crashtest" options and description.
 *
 * @public
 */
exports.crashtest = {
  options: ['-crashtest'],
  description: 'causes an exception to test the built-in signal handler'
};

/**
 * The CINEMA 4D "-nocrashhandler" options and description.
 *
 * @public
 */
exports.nocrashhandler = {
  options: ['-nocrashhandler'],
  description: 'suppress use of the application\'s crash handler'
};

/**
 * The CINEMA 4D "-nogui_nothreads" options and description.
 *
 * @public
 */
exports.nogui_nothreads = {
  options: ['-nogui_nothreads'],
  description: 'special commandline debug mode'
};

/**
 * The CINEMA 4D "-debug" options and description.
 *
 * @public
 */
exports.debug = {
  options: ['-debug'],
  description: 'enable debug output'
};
