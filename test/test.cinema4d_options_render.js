var assert = require('assert');
var c4d_options_render = require('./../src/cinema4d_options_render.js');

suite('cinema4d_options_render.js', function() {
  suite('render', function() {
    test('Without data.', function() {
      assert.deepEqual( [], c4d_options_render.render.getOptionsArray() );
    });

    test('With data "foo".', function() {
      assert.deepEqual( ['-render','foo'], c4d_options_render.render.getOptionsArray('foo') );
    });
  });

  suite('frame', function() {
    test('Without data.', function() {
      assert.deepEqual( [], c4d_options_render.frame.getOptionsArray() );
    });
    
    test('With data "0".', function() {
      assert.deepEqual( ['-frame','0'], c4d_options_render.frame.getOptionsArray('0') );
    });
    
    test('With data "0,1".', function() {
      assert.deepEqual( ['-frame','0','1'], c4d_options_render.frame.getOptionsArray('0,1') );
    });
    
    test('With data "0,1,2".', function() {
      assert.deepEqual( ['-frame','0','1','2'], c4d_options_render.frame.getOptionsArray('0,1,2') );
    });
  });

  suite('oimage', function() {
    test('Without data.', function() {
      assert.deepEqual( [], c4d_options_render.oimage.getOptionsArray() );
    });
    
    test('With data "foo".', function() {
      assert.deepEqual( ['-oimage','foo'], c4d_options_render.oimage.getOptionsArray('foo') );
    });
  });

  // suite('omultipass', function() {
  //   test('Without data.', function() {
  //     assert.deepEqual( [], c4d_options_render.omultipass.getOptionsArray() );
  //   });
  //   test('With data "foo".', function() {
  //     assert.deepEqual( ['-omultipass','foo'], c4d_options_render.omultipass.getOptionsArray('foo') );
  //   });
  // });

  // suite('oformat', function() {
  //   test('Without data.', function() {
  //     assert.deepEqual( [], c4d_options_render.oformat.getOptionsArray() );
  //   });
    
  //   test('With data "TIFF".', function() {
  //     assert.deepEqual( ['-oformat','TIFF'], c4d_options_render.oformat.getOptionsArray('TIFF') );
  //   });

  //   test('With data "TGA".', function() {
  //     assert.deepEqual( ['-oformat','TGA'], c4d_options_render.oformat.getOptionsArray('TGA') );
  //   });
    
  //   test('With data "BMP".', function() {
  //     assert.deepEqual( ['-oformat','BMP'], c4d_options_render.oformat.getOptionsArray('BMP') );
  //   });
    
  //   test('With data "IFF".', function() {
  //     assert.deepEqual( ['-oformat','IFF'], c4d_options_render.oformat.getOptionsArray('IFF') );
  //   });
    
  //   test('With data "JPG".', function() {
  //     assert.deepEqual( ['-oformat','JPG'], c4d_options_render.oformat.getOptionsArray('JPG') );
  //   });
    
  //   test('With data "PICT".', function() {
  //     assert.deepEqual( ['-oformat','PICT'], c4d_options_render.oformat.getOptionsArray('PICT') );
  //   });
    
  //   test('With data "PSD".', function() {
  //     assert.deepEqual( ['-oformat','PSD'], c4d_options_render.oformat.getOptionsArray('PSD') );
  //   });
    
  //   test('With data "PSB".', function() {
  //     assert.deepEqual( ['-oformat','PSB'], c4d_options_render.oformat.getOptionsArray('PSB') );
  //   });
    
  //   test('With data "RLA".', function() {
  //     assert.deepEqual( ['-oformat','RLA'], c4d_options_render.oformat.getOptionsArray('RLA') );
  //   });
    
  //   test('With data "RPF".', function() {
  //     assert.deepEqual( ['-oformat','RPF'], c4d_options_render.oformat.getOptionsArray('RPF') );
  //   });
    
  //   test('With data "B3D".', function() {
  //     assert.deepEqual( ['-oformat','B3D'], c4d_options_render.oformat.getOptionsArray('B3D') );
  //   });

  //   test('With incorrect data "foo".', function() {
  //     assert.deepEqual( ['-oformat','TIFF'], c4d_options_render.oformat.getOptionsArray('foo') );
  //   });
  // });

  // suite('oresolution', function() {
  //   test('Without data.', function() {
  //     assert.deepEqual( [], c4d_options_render.oresolution.getOptionsArray() );
  //   });

  //   test('With data "1000,1000".', function() {
  //     assert.deepEqual( ['-oresolution','1000','1000'], c4d_options_render.oresolution.getOptionsArray('1000,1000') );
  //   });
    
  //   test('With incorrect data "foo".', function() {
  //     assert.deepEqual( [], c4d_options_render.oresolution.getOptionsArray('foo') );
  //   });
  // });

  // suite('threads', function() {
  //   test('Without data.', function() {
  //     assert.deepEqual( [], c4d_options_render.ohreads.getOptionsArray() );
  //   });
    
  //   test('With data. "1"', function() {
  //     assert.deepEqual( ['-threads','1'], c4d_options_render.ohreads.getOptionsArray(1) );
  //   });
    
  //   test('With incorrect data "foo".', function() {
  //     assert.deepEqual( ['-threads','0'], c4d_options_render.ohreads.getOptionsArray('foo') );
  //   });
  // });
});
