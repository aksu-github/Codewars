/*
Instruction:

What if we need the length of the words separated by a space to be added 
at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

*/

//  My Solution 

function addLength(str) {
  let myArr = str.split(' ').map( e => e = e + ' ' + e.length);
  return myArr;
}
