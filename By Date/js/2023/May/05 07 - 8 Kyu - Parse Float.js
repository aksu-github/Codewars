/*
Instruction:

Write function parseF which takes an input and 
returns a number or null if conversion is not possible. 

The input can be one of many different types so be aware.

*/

//  Codewars

const parseF = function(s){

  return /\d+/.test(s) ? +s : null;
}