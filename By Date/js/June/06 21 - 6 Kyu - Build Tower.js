/*
Instruction:

Build a pyramid-shaped tower given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

//  My Solution

// function towerBuilder(nFloors) {
//   let arr = new Array(nFloors);
  
//   for ( let i = 0; i < arr.length; i++){
//     if ( arr.length == 1) {
//       arr[i] = '*';
//       //console.log(arr)
//       return arr
//     }
//     arr[i] = ' '.repeat((arr.length - i-1)) + '*'.repeat(i) + '*' + '*'.repeat(i) + ' '.repeat((arr.length - i-1));
//   }
//   console.table(arr)
//   return arr
// }
towerBuilder(1);
towerBuilder(6);

//  Codewars - Best Solution
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range

function towerBuilder(n){
  return Array.from( {length: n} , function(_,i){
    const space = ' '.repeat(n - i - 1);
    return space + '*'.repeat(2*i+1) + space;
  })
}