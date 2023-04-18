/*
Instruction:

A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

*/

//  My Solution

function automorphic(n){
  let x = (n**2).toString().split('').slice(-n.toString().length).join('');
  return +x === n ? 'Automorphic' :  'Not!!';
  
}

//  Codewars - Best Practice

function automorphic(n){
  return String(n**2).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
}