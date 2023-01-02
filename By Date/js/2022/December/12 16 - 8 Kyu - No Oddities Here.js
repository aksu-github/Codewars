/*
Instruction:

Write a small function that returns the values of an array that are not odd.

*/

//  My Solution 

function noOdds( values ){
  // Return all non-odd values
  return values.filter( e => e % 2 == 0 )
}