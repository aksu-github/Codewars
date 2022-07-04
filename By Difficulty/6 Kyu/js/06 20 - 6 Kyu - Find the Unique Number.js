/*
Instruction:

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

//  My Solution 

//  .filter( (e,i,arr) => arr.indexOf(e) == i) gets unique values
function findUniq(arr) {
  let dupes = arr.filter( (e,i,arr) => arr.indexOf(e) !== i) 
  let val   = Number(arr.filter( e => e != dupes[0] ))
  console.log(val)
  return val;
}
findUniq([ 1, 1, 1, 2, 1, 1 ])

//  Codewars - Best Solution

//  if 'find 1st occurence' === 'find last occurence', there is only 1 occurence
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}