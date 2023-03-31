/*
Instruction:

given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]

*/

//  My Solution

function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map( e => e.replace('rotten', '').toLowerCase()) : [];
}