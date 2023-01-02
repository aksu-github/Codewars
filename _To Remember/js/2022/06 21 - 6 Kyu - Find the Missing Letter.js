/*
Instruction:

Write a method that takes an array of consecutive (increasing) 
letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.

The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' 
['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

*/

//  My Solution 

function findMissingLetter(array)
{
  for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt()) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
  //  Why doesnt this work? IDK
  //  array.forEach( (e,i,a) => array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt() ? String.fromCharCode(array[i].charCodeAt() + 1) : ' ');

}

findMissingLetter(['a','b','c','d','f'])