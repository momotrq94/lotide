const takeUntil = function(array, callback) {
  let outputArray = [];
  for (const item of array) {
    if (callback(item)) {
      return outputArray;
    }
    outputArray.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

const allNums = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
const negativeNums = [-5,-4,-3,-2,-1];
assertArraysEqual(takeUntil(allNums,x => x >= 0), negativeNums);

