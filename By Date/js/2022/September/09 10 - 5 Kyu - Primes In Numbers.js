/*
Instruction:

Given a positive number n > 1 find the prime factor decomposition of n. 

The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

//  My Solution 

//  Code works but get timeout error

function primeFactors(n){
  let resObj = {};
  let res = '';
  
  primeFactorsArr(n).forEach( e => resObj[e] ? resObj[e]++ : resObj[e] = 1);
  
//   console.log(Object.keys(resObj))
//   console.log(Object.values(resObj))
//   console.log(Object.entries(resObj))
  
  for ( let i = 0; i < Object.keys(resObj).length; i++){
    if ( Object.values(resObj)[i] != 1){
      res += `(${Object.keys(resObj)[i]}**${Object.values(resObj)[i]})`
    }
    if ( Object.values(resObj)[i] == 1){
      res += `(${Object.keys(resObj)[i]})`
    }
  }
//   console.log(res)
  return res;
}

function isPrime(x) {
  if ( x <= 1 ) return false;
  if ( x == 2 ) return true;

  let num1 = Math.sqrt(x);

  for ( let i = 2; i <= num1; i++){
    if ( num1 % i === 0){
      return false;
    }
  }
  return true;
}

function primeFactorsArr(y) {
  let arr = [];

  for ( let i = 2; i <= y; i++ ){
    if ( isPrime(i) && y % i == 0 ){
      arr.push(i);
      y = y / i;
      i--;
    }
  }
  return arr;
}

//  Codewars - Best Solution

function primeFactors(n){
  let res = '';
  let c;
  
  if ( n % 2 == 0 ){
    c=0;
    while ( n % 2 == 0 ){
      c++;
      n = n / 2;
    }
    res += "(" + ( c>1 ? 2+"**"+c  : 2 ) +")";
  }
  
  for (let i=3; i <= n; i+=2) {
    c=0;
    while (n%i == 0) { 
      c++; 
      n = n / i;
    }
    res += c ? "(" + ( c>1 ? i+"**"+c  : i ) +")" : ""
  }
  return res || "("+n+")"
}