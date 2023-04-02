/*
Instruction:

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

*/

//  My Solution 

function capitalize(s,arr){
  let res = '';
  for ( let i = 0; i < s.length; i++){
    if ( arr.includes(i) ){
      res+= s[i].toUpperCase();
    } else {
      res+=s[i]
    }
  }
  return res;
};

//  Codewars

function capitalize(s,arr){
  return [...s].map((e,i) => arr.includes(i) ? e.toUpperCae() :  e ).join('');
}