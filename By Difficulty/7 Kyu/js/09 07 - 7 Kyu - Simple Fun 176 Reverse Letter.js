/*
Instruction:

Given a string str, reverse it and omit all non-alphabetic characters.

*/

//  My Solution 

function reverseLetter(str) {
  return str.split('').filter( e => e.toUpperCase() != e.toLowerCase()).reverse().join('');
}

//  Codewars
function reverseLetter(str){
  let regex = /[a-z]/ig
  return str.match(regex).reverse().join('');
}

function reverseLetter(str){
  let regex = /[^a-z]/ig;
  return str.replace(regex,'').split('').reverse().join('');
}