/*
Instruction:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers

*/

//  My Solution

Array.prototype.square = function() {
  return this.map( e => e = Math.pow(e,2) );
};
Array.prototype.cube = function() {
  return this.map( e => e = Math.pow(e,3) );
};
Array.prototype.sum = function() {
  return this.reduce( (a,b) => a + b, 0 );
};
Array.prototype.average = function() {
  return this.sum() / this.length;
};
Array.prototype.even = function() {
  return this.filter( e => e % 2 === 0 )
};
Array.prototype.odd = function() {
  return this.filter( e => e % 2 !== 0 )
};