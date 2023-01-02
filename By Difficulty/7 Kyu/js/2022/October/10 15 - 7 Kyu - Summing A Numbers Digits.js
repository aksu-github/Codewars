/*
Instruction:

Write a function named sumDigits which takes a number 
as input and returns the sum of the absolute value of 
each of the number's decimal digits.

*/

//  My Solution

function sumDigits(number) {
  return  Math.abs(number)
              .toString()
              .split('')
              .map(Number)
              .reduce((a,b) => a+b, 0);
}