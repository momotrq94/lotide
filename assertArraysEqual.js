const eqArrays = function(array1,array2) {
  let arrayValidator = [];
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        arrayValidator.push(1);
      } else {
        return false;
      }
    }
    if (array1.length === arrayValidator.length) {
      return true;
    }
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢Assertion Passed: Array1 === Array2");
  } else {
    console.log("🔴🔴🔴Assertion Failed: Array1 !== Array2");
  }
};

const assertArraysEqual = function(array1, array2) {
  assertEqual(eqArrays(array1,array2),true);
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,5,3]);
