const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  let outputObj = {};
  //first manipulate string to remove spaces and convert all to lowercase.
  let modString = string.split(" ").join("");
  modString = modString.toLowerCase();
  for (const letter of modString){
    if (outputObj[letter]===undefined){
      outputObj[letter] = 1;
    }
    else {
      outputObj[letter] += 1;
    }
  }
  return outputObj;
}



result = countLetters("Ha ha hA ha h");
assertEqual(result["h"],5);
assertEqual(result["a"],4);