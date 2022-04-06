const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " || sentence[i] === "." || sentence[i] === "?" || sentence[i] === "!") {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  return results;
};

let tester = "lighthouse in the house";

console.log(letterPositions(tester));