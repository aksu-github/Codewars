/*
Instruction:

A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

*/

//  My Solution

function specialNumber(n){
  return /[6-9]/g.test(n) ? 'NOT!!' : 'Special!!';
}