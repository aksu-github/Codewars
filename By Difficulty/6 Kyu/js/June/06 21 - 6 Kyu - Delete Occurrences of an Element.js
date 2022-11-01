/*
Instruction:

Given a list and a number, 
create a new list that contains each number of list at most N times, 
without reordering.

For example if the input number is 2, 
and the input list is [1,2,3,1,2,1,2,3], 
you take [1,2,3,1,2], drop the next [1,2] 
since this would lead to 1 and 2 being in the result 3 times, 
and then take 3, which leads to [1,2,3,1,2,3].

With list [20,37,20,21] 
and number 1, 
the result would be [20,37,21].

*/

//  My Solution - My Super Dumb Solution

// function deleteNth(arr,n){
//   let myArr = arr;
//   //  create tracker pairs
//   let tracker = {};
//   //  populate tracker
//   for ( let i = 0; i < arr.length; i++){
//     tracker[`${arr[i]}`] =  tracker[`${arr[i]}`] + 1 || 1;
//   }
//   //  modify tracker to track key type and amount of values of key to be removed from original array
//   for ( key in tracker){
//     if ( tracker[key] <= n){
//       delete tracker[key]
//     } else {
//       tracker[key] = tracker[key] - n;
//     }
//   }
//   for ( key in tracker){
//     let n = tracker[key]
//     console.log(n)
//     for ( let i = arr.length; i > 0; i--){
//       if (arr[i] == Number(key) && n > 0) {
//         arr.splice(i,1)
//         n--
//       }
//     }
//   }
//   return arr;
// }

deleteNth([20,37,20,21], 1)
//deleteNth([1,1,3,3,7,2,2,2,2],3)

//  Codewars - Best Solution

function deleteNth(arr,x) {
  let cache = {};

  //  function expressions are executed when execution reaches them

  //  1) filtering arr thru each element
  //  2) does cache[e] exist?
  //        No? --> create cache[e] and assign 0 + 1
  //        Yes? --> cache[e] = cache[e] + 1
  //  3) Cache[e] <= x?
  //        No? --> return false to filter()
  //        Yes? --> return true to filter()

  // console.log(arr.filter(function(e) {
  //   cache[e] = (cache[e]||0) + 1;
  //   return cache[e] <= x;}));

  return arr.filter(function(e) {
    cache[e] = (cache[e]||0) + 1;
    return cache[e] <= x;
  });
}