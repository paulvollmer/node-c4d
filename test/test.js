/**
 * Module dependencies.
 */
var c4d = require('../src/index.js');

/**
 * Set the path to the CINEMA 4D application.
 */
//c4d.setApplicationPath('/path/to/cinema/4d');

/**
 * Get the application path.
 */
console.log('CINEMA 4D app path: '+c4d.getApplicationPath());

/**
 * Render a c4d file and override some parameter.
 */
c4d.render({
  filepath: 'files/test.c4d',
  frame: '0,20'
});
