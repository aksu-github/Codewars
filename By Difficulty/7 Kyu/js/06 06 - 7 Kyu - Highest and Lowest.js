/*
Instruction:

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

//  My Solution

// function highAndLow(numbers){
//   let sorted = numbers.split(' ').map(Number).sort((a,b) => a > b ? 1 : -1 );
//   let low = sorted.slice(0,1)
//   let high = sorted.slice(sorted.length-1,sorted.length)
//   // console.log(numbers.split(' ').map(Number).sort((a,b) => a > b ? 1 : -1 ));
//   // console.log(numbers.split(' ').map(Number).sort((a,b) => a > b ? 1 : -1 ).slice(sorted.length-1,sorted.length));
//   return `${high} ${low}`
// }

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
highAndLow("1 2 3")

//  Codewars - Best Solution

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  /*
  Note:

  const array = ['a', 'b'];
  const elements = [0, 1, 2];
  array.push.apply(array, elements);
  
  console.info(array); // ["a", "b", 0, 1, 2]

  */
  //console.log(`${Math.max.apply(null,numbers)} ${Math.min.apply(null,numbers)}`)
  return `${Math.max.apply(null,numbers)} ${Math.min.apply(null,numbers)}`
}