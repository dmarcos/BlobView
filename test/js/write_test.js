(function() {

  describe('Tests read operations of blobview.js', function() {

  var blob;
  beforeEach(function() {
    blob = new Blob(["test"], {type: 'image/png'});
  });

  it('BlobView should read string, write it and read the new value', function(done) {
    //process.stdout.write("testStringASCIICodes");
    BlobView.get(blob, 0, 4, function(result) {
      assert.equal(result.getASCIIText(0,4), "test");
      assert.equal(String.fromCharCode(result.getUint8(0)), "t");
      assert.equal(String.fromCharCode(result.getUint8(1)), "e");
      assert.equal(String.fromCharCode(result.getUint8(2)), "s");
      assert.equal(String.fromCharCode(result.getUint8(3)), "t");
      done();
    });
  });

  it('BlobView should read the whole string', function(done) {
    BlobView.get(blob, 0, 4, function(result) {
      var newValue = "TEST";
      assert.equal(result.getASCIIText(0,4), "test");
      result.setUint8(0,newValue.charCodeAt(0));
      result.setUint8(1,newValue.charCodeAt(1));
      result.setUint8(2,newValue.charCodeAt(2));
      result.setUint8(3,newValue.charCodeAt(3));
      assert.equal(result.getASCIIText(0,4), "TEST");
      done();
    });
    assert.equal(0, 0 );
  });

});

}).call(this);