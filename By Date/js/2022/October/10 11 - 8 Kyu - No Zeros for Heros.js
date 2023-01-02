/*
Instruction:

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

*/

//  My Solution

function noBoringZeros(n) {
  let regex = /0+$/;
  
  return Number(n.toString().replace(regex,''))
}