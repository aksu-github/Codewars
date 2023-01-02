/*
Instruction:



*/

//  My Solution 

function replace(s){
  let regex = /[aeiou]/ig;
  return s.replace(regex, '!');
}