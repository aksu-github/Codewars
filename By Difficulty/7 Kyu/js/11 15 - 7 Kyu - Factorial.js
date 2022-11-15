/*
Instruction:

Your task is to write function factorial.

*/

//  My Solution 

function factorial(n){
  let res = 1;
  if ( n == 1 || n == 0 ){
    return 1;
  }
  for ( let i = n; i > 1; i--, n--){
    res *= n;
  }
  return res;
}

//  Codewars

function factorial(n){
  return n ? n*factorial(n-1) :  1;
}

function factorial(n){
  let res = 1;
  while (  n > 0 ){
    res*=n;
    n--;
  }
  return res;
}