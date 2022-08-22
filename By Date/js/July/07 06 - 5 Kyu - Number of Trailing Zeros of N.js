/*
Instruction:

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

*/

//  My Solution

function zeros (n) {
  let kMax = Math.floor(Math.log(n)/Math.log(5));
  let trailingZeros = 0;
  if ( n == 0 ) return 0;
  for ( let i = 1; i <= kMax; i++){
    trailingZeros += Math.floor(n/(5**i));
  }
  return trailingZeros;
}

zeros(6)
zeros(12)
zeros(30)