/*
Instruction:

Write a program that finds the summation of every number 
from 1 to num. The number will always be a positive integer greater than 0.

*/

//  My Solution

let summation = function (num) {
  let res = 0;
  for ( let i = 1; i <= num; i++){
    res+=num;
  }
  return res;
}

//  Codewars - Best Solution

let summation = function(num){
  return n * (n+1)/2;
}