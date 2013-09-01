var assert = require('assert');
var c4d_options_general = require('./../src/cinema4d_options_general.js');

suite('cinema4d_options_general.js', function() {
  suite('nogui', function() {
    test('getOptionsArray()', function() {
      assert.deepEqual( ['-nogui'], c4d_options_general.nogui.getOptionsArray() );
    });
  });
});
