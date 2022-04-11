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

module.exports = countLetters;



// result = countLetters("Ha ha hA ha h");
// assertEqual(result["h"],5);
// assertEqual(result["a"],4);