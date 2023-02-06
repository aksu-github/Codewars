/*
Instruction:

Given an array of numbers, return a new array of length number containing 
the last even numbers from the original array (in the same order). 

The original array will be not empty and will contain at least "number" even numbers.

*/

//  My Solution

function evenNumbers(array, number) {
  return array.filter( e => e % 2 == 0 ).slice(-number);
}