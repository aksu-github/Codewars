// // MY SOLUTION
// function moveZeros(arr) {
//   //Use filter() to find # of 0's
//   //filter() will return array of matching elements

//   console.log(arr.filter(item => item === 0))
//   zeroArr = arr.filter(item => item === 0)

//   //search through original array for position of 0's
//   //splice() all index of 0's

//   //Ran Codewars 'attempt' code and saw repeated 0's caused an issue with 1 FOR loop
//   //changed 1 FOR loop into DO-WHILE to keep rerunning array if 0 is still detected after being spliced

//   //console.log(`Array B4: ${arr}\n`)
//   do{
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] ===0){
//         arr.splice(i,1);
//       }
//     }
//   } while (arr.includes(0));
//   //console.log(`Array After: ${arr}\n`)

//   //concatenate array of zeroes onto spliced array at end
//   console.log(arr.concat(zeroArr));
//   return arr.concat(zeroArr);
// }

// Codewars Solution 1
var moveZeros = function (arr) {
  console.log(arr.filter(e => e !== 0));
  console.log(arr.filter(e => e === 0));
  console.log(arr.filter(e => e !== 0).concat(arr.filter(e => e === 0)))
  return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0));
}

// // Codewars Solution 2
// var moveZeros = function (arr) {
//   var filtedList = arr.filter(function (num){return num !== 0;});
//   var zeroList = arr.filter(function (num){return num === 0;});
//   return filtedList.concat(zeroList);
// }

moveZeros([false,1,0,1,2,0,0,1,3,"a"])