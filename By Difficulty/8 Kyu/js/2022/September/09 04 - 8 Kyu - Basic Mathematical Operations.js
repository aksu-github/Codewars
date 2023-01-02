/*
Instruction:

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

*/

//  My Solution 

function basicOp(operation, value1, value2){
  const opData = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  }
  return opData[operation];
}

