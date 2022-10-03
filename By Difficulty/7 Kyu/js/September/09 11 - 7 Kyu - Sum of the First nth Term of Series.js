/*
Instruction:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

//  My Solution 

function SeriesSum(n){
  if ( n == 0 ) return '0.00';

  let arr = new Array(n);
  
  for ( let i = 0; i < arr.length; i++){
    arr[i] = 1/(3*i + 1); 
  }
  return arr.reduce( (a,b) => a + b, 0).toFixed(2);
}

//  Codewars - Best Solution

function SeriesSum(n){
  let res = 0;
  for ( let i = 0; i < n; i++){
    res += 1 / ( 3 * i + 1);
  }
  return res.toFixed(2);
}