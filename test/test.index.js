var assert = require('assert');
var c4d = require('./../src/index.js');

suite('index.js', function() {
  test('createOptionsArray() with data.', function() {
    var tmpData = {
      filepath: 'foo'
    };
    assert.deepEqual( ['-render','foo','-nogui'], c4d.createOptionsArray(tmpData) );
  });

  test('createOptionsArray() without data.', function() {
    assert.deepEqual( [], c4d.createOptionsArray() );
  });
});
