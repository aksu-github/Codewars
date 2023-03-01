/*
Instruction:

Given an array/list of integers, find the Nth smallest element in the array.

*/


//  My Solution

function nthSmallest(arr, pos){
  let sortArr = arr.sort( (a,b) => a - b);
  return sortArr[pos - 1]
}