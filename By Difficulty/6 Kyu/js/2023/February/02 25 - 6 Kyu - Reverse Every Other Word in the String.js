/*
Instruction:

Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there 
is exactly one space between each word. 

Punctuation marks should be treated as if they are a part of the word in this kata.

*/


//  My Solution

function reverse(str){
  if ( str.trim().length < 1){
    return '';
  }
  let myStr = str.trim().split(' ');
  
  for ( let i = 1; i < myStr.length; i+=2){ 
    myStr[i] = myStr[i].split('').reverse().join('');
  }
  return myStr.join(' ');
}