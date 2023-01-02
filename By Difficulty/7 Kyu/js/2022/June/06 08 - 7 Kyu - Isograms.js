/*
Instruction:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

//  My Solution

// function isIsogram(str){
//   str = str.split('').map(e => e.toLowerCase());
//   let strSet = new Set(str)
//   //console.log(str.length == strSet.size ? true : false)
//   return str.length == strSet.size ? true : false;
// }
isIsogram('moOse');
isIsogram('Dermatoglyphics')

//  Codewars - Best Solution

function isIsogram(str){
  let strSet = new Set(str.toLowerCase())
  return str.length == strSet.size ? true : false;
}