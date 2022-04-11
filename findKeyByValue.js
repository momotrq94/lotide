const findKeyByValue = function(Obj, val) {
  let keyArray = Object.keys(Obj);
  for (const key of keyArray) {
    if (Obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);