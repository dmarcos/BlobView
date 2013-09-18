(function() {

  describe('Tests read operations of blobview.js', function() {

  var blob;
  beforeEach(function() {
    blob = new Blob(["test"], {type: 'image/png'});
  });

  it('BlobView should read each character independently', function(done) {
    //process.stdout.write("testStringASCIICodes");
    BlobView.get(blob, 0, 4, function(result) {
      assert.equal(String.fromCharCode(result.getUint8(0)), "t");
      assert.equal(String.fromCharCode(result.getUint8(1)), "e");
      assert.equal(String.fromCharCode(result.getUint8(2)), "s");
      assert.equal(String.fromCharCode(result.getUint8(3)), "t");
      done();
    });
  });

  it('BlobView should read the whole string', function(done) {
    BlobView.get(blob, 0, 4, function(result) {
      assert.equal(result.getASCIIText(0,4), "test");
      done();
    });
    assert.equal(0, 0 );
  });


});

}).call(this);