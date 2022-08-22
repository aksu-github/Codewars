/*
Instruction:

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

//  My Solution 

function findShort(s){
  s = s.split(' ').sort( (a,b) => a.length >  b.length ? 1 : -1)
  //console.log(s)
  return s[0].length
}


//  Codewars - Best Solution

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

findShort("bitcoin take over the world maybe who knows perhaps")