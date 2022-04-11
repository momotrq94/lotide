const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    let result = tail([1,2,3]);
    assert.strictEqual(result[0],2);
    assert.strictEqual(result[1],3);
  });

  it("returns ['is', 'momo'] for ['this', 'is', 'momo']", () => {
    let result = tail(["this","is","momo"]);
    assert.deepEqual(result, ["is", "momo"]);
  });

});