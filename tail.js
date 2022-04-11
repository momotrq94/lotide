const tail = function(array1) {
  let outputArray;
  if (array1.length === 0 || array1.length === 1) {
    outputArray = [];
  } else {
    outputArray = array1.slice(1);
  }
  return outputArray;
};

module.exports = tail;
