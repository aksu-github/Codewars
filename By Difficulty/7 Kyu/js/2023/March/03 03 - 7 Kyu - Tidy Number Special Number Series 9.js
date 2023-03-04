/*
Instruction:

A Tidy number is a number whose digits are in non-decreasing order.

*/

//  My Solution 

function tidyNumber(n){
  let str = n.toString().split('').map(Number),
      x = str[0];
  for ( let i = 1; i <= str.length; i++){
    if ( x > str[i] ){
      return false;
    }
    x = str[i];
  }
return true;
}

//  Codewars - Similar to Mine, but cleaner

const tidyNumber = n => {
  let s = n.toString();
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] > s[i+1]) return false;
  }
  return true;
}

//  Codewars - 1 liner

function tidyNumber(n){
  return [...n+=""].sort().join('')==n
}