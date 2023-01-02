/*
Instruction:

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

*/

//  My Solution 

function pipeFix(numbers){
  let res = [];

  for ( let i = numbers[0]; i <= numbers.slice(-1); i++){
    res.push(i)
  }
  return res;
}