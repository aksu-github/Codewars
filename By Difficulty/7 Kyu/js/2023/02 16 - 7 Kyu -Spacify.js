/*
Instruction:

spacify("hello world") // returns "h e l l o   w o r l d"

*/


//  My Solution

function spacify(str) {
  return str.split('').join(' ')
}

//  Codewars

function spacify(s){
  return [...s].join(' ')
}