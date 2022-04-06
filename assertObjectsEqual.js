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

const assertObjectsEqual = function(actual, expected) {
  let check = eqObjects(actual, expected);
  const inspect = require('util').inspect;
  if (check) {
    console.log(`🟢🟢🟢Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (!check) {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
