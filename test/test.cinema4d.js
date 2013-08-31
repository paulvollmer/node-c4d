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

  suite('optionFrame()', function() {
    test('Without data.', function() {
      assert.equal( false, c4d.optionFrame() );
    });
    test('With data "0".', function() {
      assert.deepEqual( ['-frame','0'], c4d.optionFrame('0') );
    });
    test('With data "0,1".', function() {
      assert.deepEqual( ['-frame','0','1'], c4d.optionFrame('0,1') );
    });
    test('With data "0,1,2".', function() {
      assert.deepEqual( ['-frame','0','1','2'], c4d.optionFrame('0,1,2') );
    });
  });

  suite('optionImage()', function() {
    test('Without data.', function() {
      assert.equal( false, c4d.optionImage() );
    });
    test('With data "foo".', function() {
      assert.deepEqual( ['-oimage','foo'], c4d.optionImage('foo') );
    });
  });

  suite('optionMultipass()', function() {
    test('Without data.', function() {
      assert.equal( false, c4d.optionMultipass() );
    });
    test('With data "foo".', function() {
      assert.deepEqual( ['-omultipass','foo'], c4d.optionMultipass('foo') );
    });
  });

  suite('optionFormat()', function() {
    test('Without data.', function() {
      assert.equal( false, c4d.optionFormat() );
    });
    test('With data "TIFF".', function() {
      assert.deepEqual( ['-oformat','TIFF'], c4d.optionFormat('TIFF') );
    });
    test('With data "TGA".', function() {
      assert.deepEqual( ['-oformat','TGA'], c4d.optionFormat('TGA') );
    });
    
    test('With data "BMP".', function() {
      assert.deepEqual( ['-oformat','BMP'], c4d.optionFormat('BMP') );
    });
    test('With data "IFF".', function() {
      assert.deepEqual( ['-oformat','IFF'], c4d.optionFormat('IFF') );
    });
    test('With data "JPG".', function() {
      assert.deepEqual( ['-oformat','JPG'], c4d.optionFormat('JPG') );
    });
    test('With data "PICT".', function() {
      assert.deepEqual( ['-oformat','PICT'], c4d.optionFormat('PICT') );
    });
    test('With data "PSD".', function() {
      assert.deepEqual( ['-oformat','PSD'], c4d.optionFormat('PSD') );
    });
    test('With data "PSB".', function() {
      assert.deepEqual( ['-oformat','PSB'], c4d.optionFormat('PSB') );
    });
    test('With data "RLA".', function() {
      assert.deepEqual( ['-oformat','RLA'], c4d.optionFormat('RLA') );
    });
    test('With data "RPF".', function() {
      assert.deepEqual( ['-oformat','RPF'], c4d.optionFormat('RPF') );
    });
    test('With data "B3D".', function() {
      assert.deepEqual( ['-oformat','B3D'], c4d.optionFormat('B3D') );
    });

    test('With incorrect data "foo".', function() {
      assert.deepEqual( ['-oformat','TIFF'], c4d.optionFormat('foo') );
    });
  });

  suite('optionResolution()', function() {
    test('Without data.', function() {
      assert.equal( false, c4d.optionResolution() );
    });
    test('With data.', function() {
      assert.deepEqual( ['-oresolution','1000','1000'], c4d.optionResolution('1000,1000') );
    });
  });

  suite('optionThreads()', function() {
    test('Without data.', function() {
      assert.equal( false, c4d.optionThreads() );
    });
    test('With data.', function() {
      assert.deepEqual( ['-threads','1'], c4d.optionThreads(1) );
    });
  });
});
