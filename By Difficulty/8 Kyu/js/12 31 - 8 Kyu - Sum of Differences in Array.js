/*
Instruction:

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

*/

//  My Solution 

function sumOfDifferences(arr) {
  if ( !arr ){
    return 0;
  }
  let myArr = arr.sort( (a,b) => b - a),
      res = 0;
  
  for ( let i = 0; i < myArr.length - 1; i++){
    res += myArr[i] - myArr[i+1]
  }
  
  return res;
}

//  Codewars - Best Practice
/*
  If you have the array [a,b,c] (already sorted in decending order), 
  then the solution would be (a-b)+(b-c) = a-c+b-b = a-c.
  All elements other than the maximum and minimum get canceled out.
*/ 
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}