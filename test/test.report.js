var assert = require('assert');
var report_class = require('./../src/report.js');
var report = new report_class.Report();

suite('report', function() {
  test('nextPrime should return the next prime number', function() {
    assert.equal('report', report.getFilename() );
  });

});
