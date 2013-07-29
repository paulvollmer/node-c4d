
var c4d = require('../src/index.js');


//c4d.setApplicationPath('/path/to/cinema/4d');

c4d.render({
  silent: false,
  filename: '/Users/wng/code/github/node-c4d-cli/test/files/cone_standard.c4d',
  frame_from: 0,
  frame_to: 1,
  frame_step: 1,
  oimage: 'test',
  omultipass: 'test_multipass',
  oformat: 'TIFF',
  oresolution_width: 800,
  oresolution_height: 600,
  threads: 0
});
