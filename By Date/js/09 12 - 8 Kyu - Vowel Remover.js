/*
Instruction:

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

*/

//  My Solution 

function shortcut ( str ){
  let regex = /[^aeiou]/ig;
  return !str ? str : str.match(regex).join('') ;
}

//  Codewars - Best Solution

function shrotcut ( str ) {
  let regex = /[^aeiou]/ig;
  return str.replace(regex,'');
}