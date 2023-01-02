/*
Instruction:

Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

*/

//  My Solution 

// function getSum( a,b ){
//   let arr = []
//   let min = a > b ? b : a;
//   let max = a > b ? a : b;
//   console.log(`Checkmin ${min}`)

//   for (let i = min; i <= max; i++){
//     arr.push(i)
//   }
  
//   //console.log(`Arr b4 reduce: ${arr}`)
//   arr = arr.reduce((a,b) => a+b)
//   //console.log(arr)
//   return arr
  
// }
getSum(1,0)
getSum(1,2)
getSum(0,1)
getSum(1,1)
getSum(-1, 0)
getSum(-1, 2)

//  Codewars - Best Solution

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}