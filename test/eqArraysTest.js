const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //expects pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //expects fails
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // expects pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // expects fail