/*
Instruction:

Complete the function that takes two integers (a, b, where a < b) 
and return an array of all integers between the input parameters, 
including them.

*/

//  My Solution

function between(a, b) {
  let myArr = [];
  for ( let i = a; i <= b; i++){
    myArr.push(i);
  }
  return myArr;
}

//  Codewars - Clever Solution
function between(a,b){
  return Array.from(new Array(b-a+1), (_,i) => a + i);
}