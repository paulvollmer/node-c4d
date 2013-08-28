var assert = require('assert');
var utils = require('./../src/utils.js');

suite('utils.js', function() {
  test('log("foo")', function() {
    assert.equal( 'foo', utils.log('foo') );
  });

  test('log("foo", true) silent', function() {
    assert.equal( 'foo', utils.log('foo', true) );
  });

  test('error("bar")', function() {
    assert.equal( 'E R R O R - bar', utils.error('bar') );
  });
});
