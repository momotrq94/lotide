const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }
  for (const key of objKeys1) {
    if (object1[key] === object2[key]) {
      continue;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let check = eqArrays(object1[key],object2[key]);
      if (check) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let test1 = eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
let test2 = eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let test3 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
let test4 = eqObjects(cd, cd2); // => false

assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, true);
assertEqual(test4, false);