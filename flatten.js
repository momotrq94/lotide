const flatten = function(array1) {
  let outputArray = [];
  for (const element of array1) {
    if (Array.isArray(element)) {
      outputArray = outputArray.concat(flatten(element));
    } else {
      outputArray.push(element);
    }
  }
  return outputArray;
};

console.log(flatten([1,2,[3,4],5,[6]]));