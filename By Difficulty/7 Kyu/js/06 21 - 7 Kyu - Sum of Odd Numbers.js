/*
Instruction:

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

//  My Solution 

function rowSumOddNumbers(n) {
  let num       = 2 * ( n - 1 );
  let numArr    = [];
  let numStart;

  for ( let i = num; i > 1; i--){
    if ( i % 2 == 0 ){
      numArr.push(i);
    }
  }

  numStart  = numArr.reduce( (a,b) => a+b, 0);
  
  for ( let i = 0; i < n; i++){
    numArr[i] = numStart + i * 2 + 1;
  }

  numStart  = numArr.reduce( (a,b) => a+b, 0)

  return numStart
}

rowSumOddNumbers(5);

//  Codewars - Best Solution

function rowSumOddNumbers(n) {
  return n**3;
}