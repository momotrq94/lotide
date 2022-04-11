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

module.exports = eqArrays;
