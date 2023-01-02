/*
Instruction:

Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

//  My Solution

function firstNonRepeatingLetter(s) {
  let mySet = new Set();
  let myModArr = s.toLowerCase();

  let myArr = myModArr.split('').map( (e,i,a) => a.indexOf(e) == a.lastIndexOf(e) ? mySet.add(s[i]) : false);
  // console.log(s)
  // console.log(myArr)
  // console.log(Array.from(mySet)[0])

  return mySet.size ? Array.from(mySet)[0] : ''
}
firstNonRepeatingLetter('sTreSS')
firstNonRepeatingLetter('a')
firstNonRepeatingLetter('stress')
firstNonRepeatingLetter('moonmen')


//  Codewars - Best Solution

const firstNonRepeatingLetter = s =>
  s[[...s.toLowerCase()].findIndex((c, _, s) => s.indexOf(c) === s.lastIndexOf(c))] || "";