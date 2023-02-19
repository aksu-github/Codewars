/*
Instruction:

Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples

*/


//  My Solution

function sumMul(n,m){
  if ( n >= m || n == 0){
    return 'INVALID';
  }
  let res = 0;
  for ( let i = n; i < m; i+=n){
    res+=i;
  }
  return res;
}