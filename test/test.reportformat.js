var assert = require('assert');
var format_class = require('./../src/reportformat.js');
var format = new format_class.Reportformat('json', '.json');

suite('reportformat.js', function() {
  suite('name', function() {
    test('getName() returns "json".', function() {
      assert.equal( 'json', format.getName() );
    });

    test('suffixEquals(".json") returns true.', function() {
      assert.equal( true, format.suffixEquals('.json') );
    });

    test('suffixEquals(".foo") returns false.', function() {
      assert.equal( false, format.suffixEquals('.foo') );
    });
  });

  suite('suffix', function() {
    test('getSuffix() returns ".json".', function() {
      assert.equal( '.json', format.getSuffix() );
    });

    test('nameEquals("json") returns true.', function() {
      assert.equal( true, format.nameEquals('json') );
    });

    test('nameEquals("foo") returns false.', function() {
      assert.equal( false, format.nameEquals('foo') );
    });
  });
});
