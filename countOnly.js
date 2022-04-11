// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let outputObj = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (outputObj[item]) {
        outputObj[item]++;
      } else {
        outputObj[item] = 1;
      }
    }
  }
  return outputObj;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
