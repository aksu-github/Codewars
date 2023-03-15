/*
Instruction:


*/

//  My Solution

function menFromBoys(arr){
  arr = Array.from(new Set(arr));
  let odd = arr.filter( e => e % 2).sort((a,b) => b - a),
      even = arr.filter( e => e % 2 === 0).sort((a,b) => a - b);
  return even.concat(odd);
}