/*
Instruction:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

//  My Solution

// function solution(number){
  
//   let nums = new Set()
//   for ( let i = 3; i < number; i++ ) {
//     if ( i % 3 == 0 || i % 5 == 0) {
//       nums.add(i);
//     }
//   }
//   //console.log(nums)
//   //console.log(Array.from(nums).reduce((a,b) => a+b, 0))
//   return Array.from(nums).reduce((a,b) => a+b, 0)
// }


//  Codewars - Best Solution
function solution(number){
  let sum = 0;
  
  for(var i = 3;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  //console.log(sum)
  return sum;
}
solution(10);
solution(16);