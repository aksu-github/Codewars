/*
Instruction:

Consider an array/list of sheep where some sheep may be 
missing from their place. We need a function that counts 
the number of sheep present in the array (true means present).

*/

//  My Solution

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(e => e == true).length
  // return arrayOfSheep.filter(Boolean).length
}

