const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array1) {
  let output;
  if (array1.length === 0) {
    output = undefined;
  } else {
    output = array1[0];
  }
  return output;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");