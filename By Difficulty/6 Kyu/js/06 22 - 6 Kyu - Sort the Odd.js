/*
Instruction:

You will be given an array of numbers. 
You have to sort the odd numbers in 
ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

//  My Solution

function sortArray(array) {
  let index = [];
  let myArr = array;

  let oddArr = array.filter( (e,i) => e % 2 && index.push(i) ).sort( (a,b) => a-b);

  // console.log(`Odd Arr  ${oddArr}`)
  // console.log(`Index Arr  ${index}`)
  oddArr.forEach( (e,i) => myArr[index[i]] = e);

  //console.log(myArr)
  return myArr
}

// sortArray([5, 3, 2, 8, 1, 4])
sortArray([5, 3,  2, 8, 1, 4, 11])

//  Codewars - Best Solution

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}