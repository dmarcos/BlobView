(function() {

  describe('Tests write operations of blobview.js', function() {

  var blob;
  beforeEach(function() {
    blob = new Blob(["test"], {type: 'image/png'});
  });

  it('BlobView should read string, write it and read the new value', function(done) {
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
  });

});

}).call(this);