const head = function(array1) {
  let output;
  if (array1.length === 0) {
    output = undefined;
  } else {
    output = array1[0];
  }
  return output;
};

module.exports = head;
