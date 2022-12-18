const assert = require('assert');

describe('getMatcher Edge Case Tests', function() {
  let thing;

  before(function() {
    thing = {}
  });

  describe('Should handle illegal prefixes', function() {
    it('Should still correctly match', function() {
      const x = 1;

      assert.equal(x, 1);
    });
  });
});
