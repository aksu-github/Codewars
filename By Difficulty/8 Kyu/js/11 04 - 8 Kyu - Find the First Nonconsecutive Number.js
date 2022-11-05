/*
Instruction:

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

If the whole array is consecutive then return null.

The array will always have at least 2 elements1 and all elements will be numbers. 
The numbers will also all be unique and in ascending order. 
The numbers could be positive or negative and the first non-consecutive could be either too!

*/

//  My Solution 
//  Tried something new with reduce

function firstNonConsecutive (arr) {
  let x = [];
  arr.reduce( (a,b) => a + 1 == b ? b : x.push(b) )
  
  return x.length ? x[0] : null;
}

//  Codewars - Most Similar to Mine

function firstNonConsecutive (arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);

  return (Number.isInteger(result)) ? result : null;
}