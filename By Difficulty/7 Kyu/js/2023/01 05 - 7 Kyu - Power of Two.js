/*
Instruction:


*/

//  My Solution - Dumb Way

function isPowerOfTwo(n){
  if ( n == 0 ) {
    return false;
  }
  if ( n == 1 ){
    return true;
  }
  return isPowerOfTwo(n/2); 
}

//  Codewars - Best Practices

function isPowerofTwo(n){
  return Number.isInteger(Math.log2(n));
}