var assert = require('assert');
var c4d_class = require('./../src/cinema4d.js');
var c4d = new c4d_class.Cinema4D();

suite('cinema4d.js', function() {
  suite('path', function() {
    test('setPath()', function() {
      var tmpPath = '/path/to/cinema4d';
      c4d.setPath(tmpPath);
      assert.equal( tmpPath, c4d.getPath() );
    });
  });
});
