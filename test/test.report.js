var assert = require('assert');
var report_class = require('./../src/report.js');
var report = new report_class.Report();

suite('report.js', function() {
  suite('format', function() {
    test('getFormat() return the report format.', function() {
      assert.equal( 'json', report.getFormat() );
    });

    test('setFormat("json") set the report format to json.', function() {
      assert.equal( true, report.setFormat('json') );
    });

    test('setFormat("xml") set the report format to xml.', function() {
      assert.equal( true, report.setFormat('xml') );
    });
    
    test('setFormat("txt") set the report format to txt.', function() {
      assert.equal( true, report.setFormat('txt') );
    });

    test('setFormat("foo") set the report format to an incorrect format.', function() {
      assert.equal( false, report.setFormat('foo') );
    });
  });

  suite('filepath', function() {
    test('getFilepath() return the report filepath.', function() {
      assert.equal( 'report', report.getFilepath() );
    });
    test('setFilepath("./testreport") set the report filepath.', function() {
      report.setFilepath('testreport');
      assert.equal( 'testreport', report.getFilepath() );
    });
  });

  // Report test data
  var testData = {
    time: Date(),
    command_options: 'foo',
    cinema4d_stdout: 'bar',
    cinema4d_stderr: 'baz',
    code: '0'
  };
  suite('write', function() {
    test('write(testData) write a json report file', function() {
      report.setFilepath('test/report');
      report.setFormat('json');
      assert.equal( 'json', report.write(testData) );
    });

    // test('write(testData, true) write a xml report file', function() {
    //   report.setFilepath('test/report');
    //   report.setFormat('xml');
    //   assert.equal( 'xml', report.write(testData) );
    // });

    test('write(testData, true) write a txt report file silent', function() {
      report.setFilepath('test/report');
      report.setFormat('txt');
      assert.equal( 'txt', report.write(testData, true) );
    });
  });

  // suite('read', function() {
  //   test('read("test/report.json") read a report file', function() {
  //     report.read('test/report.json', function(c) {
  //       assert.equal( testData, c );
  //     });
  //   });
  // });
});
