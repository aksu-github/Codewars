/*
Instruction:

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

*/

//  My Solution

function largestPairSum (numbers) {
  return numbers.sort( (a,b) => a - b, 0)
                .slice(-2)
                .reduce( (a,b) => a + b, 0)
}

//  Codewars - Best Solution

function largestPairSum (numbers) {
  numbers.sort( (a,b) => b - a );
  return numbers[0] + numbers[1];
}