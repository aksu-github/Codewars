/*
Instruction:


Find the mean (average) of a list of numbers in an array.

*/

//  My Solution

let findAverage = function (nums) {
  return nums.reduce( (a,b) => a + b, 0) / nums.length;
}