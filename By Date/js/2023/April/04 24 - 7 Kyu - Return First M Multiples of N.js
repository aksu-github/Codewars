/*
Instruction:

Implement a function, multiples(m, n), 
which returns an array of the first m multiples of the real number n. 

Assume that m is a positive integer.
*/

//  My Solution

function multiples(m, n){
  return Array.from( {length: m}, (_,i) => (i+1)*n);
}

function multiples(m,n){
  return Array.from( new Array(m), (_,i) => (i+1)*n );
}