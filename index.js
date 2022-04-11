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
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
head,
tail,
middle,
assertArraysEqual,
assertEqual,
eqArrays,
countLetters,
countOnly,
eqObjects,
findKeyByValue,
flatten,
letterPositions,
takeUntil,
without
};