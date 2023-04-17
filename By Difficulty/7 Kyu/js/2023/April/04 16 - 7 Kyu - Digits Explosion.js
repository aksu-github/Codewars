/*
Instruction:

Given a string made of digits [0-9], 
return a string where each digit is repeated a number of times equals to its value.

Examples

explode("312")
should return :

"333122"

*/

//  My Solution

function explode(s) {
  let res = '';
  for ( let i = 0; i < s.length; i++){
    res += s[i].repeat(s[i]);
  }
  return res;
}

//  Codewars - Best Practice

function expode(s){
  return s.split('').map( e => e.repeat(+e)).join('');
}