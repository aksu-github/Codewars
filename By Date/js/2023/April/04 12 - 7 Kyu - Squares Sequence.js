/*
Instruction:

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

*/

//  My Solution

function squares(x, n) {
  if ( n < 0 ){
    return [];
  }
  let res = new Array(n).fill(x);
  for ( let i = 2; i <= n; i++){
    res[i-1] = res[i-2]**2;
  }
  return res;
}

//  Codewars

function squares(x,n){
  return Array.from( {length: n}, (_,i) => x**(2**i));
}