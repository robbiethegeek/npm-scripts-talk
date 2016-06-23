"use strict";
const assert = require('assert');

const addTwoNumbers = (num1, num2) => {
  return num1 + num2
};

const three = addTwoNumbers(1, 2);
console.log("Assert that adding 1,2 is 3");
assert.equal(three, 3);
console.log("1 + 2 does equal 3");
console.log("Assert that adding 1,2 is not 4");
assert.notEqual(three, 4);
console.log("1 + 2 does not equal 4");