var assert = require('assert');
var format_class = require('./../src/reportformat.js');
var format = new format_class.Reportformat();

suite('reportformat.js', function() {
  test('data check variable.', function() {
    assert.equal( 'json', format.data );
  });

  test('check("json") return true if the format is correct.', function() {
    assert.equal( true, format.check('json') );
  });

  test('check("bar") return false if the format is incorrect.', function() {
    assert.equal( false, format.check('bar') );
  });

  test('get() return the report format.', function() {
    assert.equal( 'json', format.get() );
  });

  test('set("txt") set the report format to `txt` and get it.', function() {
    format.set('txt');
    assert.equal( 'txt', format.get() );
  });
  
  test('set("xml") set the report format to `xml` and get it.', function() {
    format.set('xml');
    assert.equal( 'xml', format.get() );
  });
  
  test('set("json") set the report format to `json` and get it.', function() {
    format.set('json');
    assert.equal( 'json', format.get() );
  });
  
  test('set("foo") set the report format to an incorrect format.', function() {
    format.set('foo');
    assert.equal( 'json', format.get() );
  });
});
