var assert = require('assert');
var report_class = require('./../src/report.js');
var report = new report_class.Report();

suite('report.js', function() {
  test('filename check variable', function() {
    assert.equal( 'report', report.filename );
  });

  test('getFilename() return the report filename.', function() {
    assert.equal( 'report', report.getFilename() );
  });
  
  test('setFilename("foo") set the report filename and get it.', function() {
    report.setFilename('foo');
    assert.equal( 'foo', report.getFilename() );
  });

  // test('write() write a report file', function() {
  //   assert.equal( 'json', report.write('jkgsf') );
  // });

  // TODO: read test

});
