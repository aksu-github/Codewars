/*
Instruction:

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

//  My Solution 

function removeExclamationMarks(s) {
  while (s.includes('!')){
    s = s.replace('!','');
  }
  return s;
}

//  Codewars - Best Solution

function removeExclamationMarks(s){
  return s.replace(/!/g, '')
}