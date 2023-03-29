/*
Instruction:

Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined if any of the values aren't numbers.

*/

//  My Solution

function cubeOdd(arr) {
  return arr.every( e => typeof e == 'number') ? 
    arr.map( e => e**3 ).filter( e => e % 2 ).reduce( (a,b) => a + b, 0) :
    undefined;
}

//  Codewars

function cubeOdd(arr) {
  return arr.every( e => !isNaN(x)) ? 
    arr.filter( e => e % 2 ).reduce( (a,b) => a + b**3, 0) : undefined;
}