/*
Instruction:

Write a function which removes from string all non-digit 
characters and parse the remaining to number. 

E.g: "hell5o wor6ld" -> 56

*/


//  My Solution

function getNumberFromString(s) {
  return parseInt(s.replace(/[^0-9]/g, ''));
}

//  Codewars

//  + in front is unary operator
//  evaluates to its operand but attempts to convert it into a number, if it isn't already

function getNumberFromString(s) {
  return +s.replace(/\D/g, '');
}