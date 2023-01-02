/*
Instruction:

Implement the function unique_in_order which takes as argument a 
sequence and returns a list of items without any elements 
with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

//  My Solution 

// let uniqueInOrder=function(iterable){
//   let arr = [];
//   for ( let i = 0; i < iterable.length; i++){
//     if ( iterable[i] != iterable[i+1]){
//       arr.push(iterable[i])
//     }
//   }
//   // console.log(arr)
//   return arr
// }


//  Codewars - Best Solution

// Rest parameter , spread syntax
let uniqueInOrder = function(iterable){
  let x = [...iterable].filter((e,i) => e !== iterable[i+1]); // if element does not equal next iterable, filter for it
  
  return x;
}

uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD')  
uniqueInOrder([1,2,2,3,3])