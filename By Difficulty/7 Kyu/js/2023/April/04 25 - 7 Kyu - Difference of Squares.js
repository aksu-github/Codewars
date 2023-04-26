/*
Instruction:

Implement a function, multiples(m, n), 
which returns an array of the first m multiples of the real number n. 

Assume that m is a positive integer.
*/

//  My Solution

function differenceOfSquares(n){
  let perSq = 0,
      totalSq = 0;
  for ( let i = 1; i <= n; i++){
    totalSq+=i;
    perSq += i**2;
  }
  return totalSq**2 - perSq;
}