/*
Instruction:

Complete the findNextSquare method that 
finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer 
n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

*/

//  My Solution 

function findNextSquare(sq) {
  let n = Math.sqrt(sq);
  if ( Number.isInteger(n)){
    return (n+1)**2
  }
  return -1;
}

//  Codewars - Best Solution

function findNextSquare(sq){
  let n = Math.sqrt(sq);
  return n % 1 === 0 ? Math.pow(n+1,2) : -1;
}