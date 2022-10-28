/*
Instruction:

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

//  My Solution

function position(letter){
  return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`;
}


//  Codewars - Alternative Solution

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}