/*
Instruction:

Challenge:

Given a two-dimensional array of integers, 
return the flattened version of the array 
with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

*/

//  My Solution

function flattenAndSort(array) {
  let myArr = [];
  for ( let i = 0 ; i < array.length; i++){
    for ( let j = 0; j < array[i].length; j++){
      myArr.push(array[i][j])
    }
  }
//   console.log(myArr)
  return myArr.sort( (a,b) => a - b );
//   return array;
}

// Codewars - Best Solution

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);