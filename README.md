# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@momotrq94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: given an array returns first element
* `tail`: given an array returns everything but first element
* `middle`: given an array returns middle of the array 
* `assertArraysEqual`: assertion for checking two arrays are equal
* `assertEqual`: assertion for numbers and strings to check if they are equal
* `eqArrays`: returns true if two arrays and equal and false if they are not
* `countLetters`: counts the number of a times a letter appears in a string
* `eqObjects`: given two objects determines if the two objects are equal
* `findKeyByValue`: given an object and value returns the first key with that value
* `flatten`: given an inifite number of nested arrays flattens to return one array with all the values
* `letterPositions`: given a string and letter returns the positions of the where that letter occured in the string
* `takeUntil`: given an array and a callback function returns an array where the array is copied until the condition is reached
* `without`: given an array and a value returns that array without that value 
