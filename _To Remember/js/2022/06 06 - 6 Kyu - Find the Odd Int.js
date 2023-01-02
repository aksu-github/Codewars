/*
Instruction:

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

//  My Solution

// function findOdd(arr) {
//   let uniqIdArr = Array.from(new Set(arr))
//   let uniqIdCount = 0;

//   //console.log(uniqIdArr)
//   for ( let i = 0; i < uniqIdArr.length; i++){
//     if (arr.filter( e => e === uniqIdArr[i]).length % 2 === 1 ){
//       return uniqIdArr[i]
//     }
//   }
// }

//  Codewars - Best Solution

//const findOdd = A => A.sort((a, b) => a - b).reduce((a, b) => b - a)
const findOdd = A => console.log(A.sort((a, b) => a > b ? 1 : -1).reduce((a,c) => c - a))


findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]);