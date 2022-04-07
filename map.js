const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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
const doubledNums = [2,4,6,8,10];
const nums = [1,2,3,4,5];

assertArraysEqual(map(nums, x => x * 2),doubledNums);