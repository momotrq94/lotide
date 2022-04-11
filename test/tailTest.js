// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    let result = tail([1,2,3]);
    assert.strictEqual(result[0],2);
    assert.strictEqual(result[1],3);
  });

  it("returns ['is', 'momo'] for ['this', 'is', 'momo']", () => {
    let result = tail(["this","is","momo"]);
    assert.strictEqual(result[0],"is");
    assert.strictEqual(result[1],"momo");
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!