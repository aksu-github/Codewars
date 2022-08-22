/*
Instruction:

Given two arrays of strings a1 and a2 return a sorted array r 
in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

*/

//  My Solution

// function inArray(array1,array2){
//   //console.log(array2.join(''))
//   //console.log(array1.filter( e => array2.join(' ').includes(e) ).sort())
//   const myArr2 = array2.join('')
//   return array1.filter( e => myArr2.includes(e) ).sort();
// }

//  Codewars - Best Solution

function inArray(array1, array2){
  function firstInstance(checkForThis, inThisArr){
    return inThisArr.find( e => e.includes(checkForThis))
  }
  console.log(array1.filter( e => firstInstance(e,array2)).sort())
  return array1.filter( e => firstInstance(e,array2)).sort();
}
inArray(["arp", "live", "strong"],['alive', 'armstrong', 'harp', 'lively', 'sharp'])
inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"])