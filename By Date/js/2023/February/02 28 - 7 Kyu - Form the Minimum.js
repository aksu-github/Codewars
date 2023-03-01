/*
Instruction:

Given a list of digits, return the smallest number that could be 
formed from these digits, using the digits only once (ignore duplicates).

*/

//  My Solution

function minValue(values){
  let res = [];
  for ( let i = 0; i < values.length; i++){
    if ( !res.includes(values[i]) ){
      res.push(values[i]);
    }
  }
  return res.sort( (a,b) => a - b).join('') | 0
}

//  Codewars

function minValue(values){
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}