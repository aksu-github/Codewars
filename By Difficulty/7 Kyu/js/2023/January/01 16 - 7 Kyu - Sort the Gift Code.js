/*
Instruction:

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that 
accepts a string containing up to 26 unique alphabetical characters, 
and returns a string containing the same characters in alphabetical order.

*/

//  My Solution - Didnt Work Dont know why

function sortGiftCode(code){
  let unique = new Set(code).size == code.length;
  if ( code.length >= 26){
    throw new Error('Input parameter exceeded 26.')
  }
  if ( !unique ){
    throw new Error('Input parameter not entirely unique.')
  }
  return code.split('').sort( (a,b) => a.localeCompare(b)).join('');
}