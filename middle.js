const middle = function(array1) {
  let outputArray = [];
  let middleIndex;
  if (array1.length <= 2) {
    return outputArray;
  }
  if (array1.length % 2 === 0) {
    middleIndex = (array1.length / 2);
    outputArray.push(array1[middleIndex - 1]);
    outputArray.push(array1[middleIndex]);
  } else {
    middleIndex = Math.floor((array1.length / 2));
    outputArray.push(array1[middleIndex]);
  }
  return outputArray;
};

