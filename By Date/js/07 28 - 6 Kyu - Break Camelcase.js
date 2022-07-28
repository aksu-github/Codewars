/*
Instruction:

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

//  My Solution 

//  Was originally trying to use .find() to find all uppercase
//  then make an array out of the index of where .find() matched
//  throw that into a FOR loop

//  but then realized, I already used a regex to start a .find()
//  I can just use .replace() without worrying about anything since regex is already used.
function solution(string) {
  let regex = /([A-Z])/g;
  
  return string.replace(regex, ' $1')
}