/*
Instruction:

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

*/

//  My Solution

function solve(arr){
  return arr.filter( (e,i) => arr.lastIndexOf(e) == i);
}