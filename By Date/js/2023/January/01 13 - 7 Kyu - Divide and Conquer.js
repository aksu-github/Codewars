/*
Instruction:

Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract this from the total of the string integers.

Return as a number.

*/

//  My Solution 

function divCon(x){
  let nums = x.filter( e => typeof e == 'number').reduce( (a,b) => a + b, 0),
      str = x.filter( e => typeof e !== 'number').map(Number).reduce( (a,b) => a + b, 0);

  return nums - str;
}

//  Codewars - Best Practice

function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}