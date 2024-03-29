/*
Instruction:

Given a non-negative integer, 3 for example, 

return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 

Input will always be valid, i.e. no negative integers.

*/

//  My Solution

var countSheep = function (num){
  let res = '';
  for ( let i = 1; i <= num; i++){
    res += `${i} sheep...`;
  }
  return res;
}

//  Codewars

var countSheep = function(num){
  return Array.from( {num}, (_,i) => ++i + ` sheep...`).join('');
}