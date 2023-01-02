/*
Instruction:

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

*/

//  My Solution 

function nearestSq(n){
  let c = 0;
  for ( let i = 1; i < n; i++ ){
    if ( i ** 2 <= n ){
      c = i;
    }
  }
  return Math.abs(n - c**2) < Math.abs(n - (c + 1)**2) ? c**2 : (c+1)**2
}

//  Codewars

function nearestSq(n){
  return Math.pow( Math.round( Math.sqrt(n)), 2)
}