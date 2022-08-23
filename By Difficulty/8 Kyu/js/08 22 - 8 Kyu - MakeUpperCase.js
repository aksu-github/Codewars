/*
Instruction:

Write a function which converts the input string to uppercase.

*/

//  My Solution 

function makeUpperCase(str) {
  return str.toUpperCase();
}

function makeUpperCase(str){
  let response = ``;

  for (let i = 0; i < str.length; i++){
    let charCode = str[i].charCodeAt(0);
    let charUpper = ( charCode >= 97 && charCode <= 122 ) ? String.fromCharCode(charCode - 32) : str[i];

    response += charUpper;
  }
  return response;
}