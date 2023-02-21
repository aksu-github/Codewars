/*
Instruction:

uniTotal("a") == 97
uniTotal("aaa") == 291

*/


//  My Solution

function uniTotal (string) {
  let res = 0;
  for ( let i = 0; i < string.length; i++){
    res += string.charCodeAt(i);
  }
  return res;
}

//  Codewars

//  Tried to use reduce, but unsuccessful

function uniTotal(string){
  return [...string].reduce((a,b) => a + b.charCodeAt(0), 0);
}