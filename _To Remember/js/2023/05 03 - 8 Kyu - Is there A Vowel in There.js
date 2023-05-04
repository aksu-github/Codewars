/*
Instruction:



*/

//  My Solution 

function isVow(a){
  //  a.map( e => 'aeiou'.includes(x = String.fromCharCode(e) ) ? x : e)
  return a.map( e => 'aeiou'.includes(String.fromCharCode(e) ) ? String.fromCharCode(e) : e)
}
