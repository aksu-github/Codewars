/*
Instruction:

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

//  My Solution

function findLongest(array){
    return array.reduce( (a,b) => String(a).length < String(b).length ? b : a);
  }