const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require("./eqArrays");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqObjects = require("./eqObjects");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions
};