/*
Instruction:

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

//  My Solution

/*  
  use slice() to make copy of args

  a - b 

  is same as saying

  a < b ? -1 : 1

  because if a is smaller than b, it yields a negative # which is false
*/  
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let myArr = args.slice();
    return myArr.sort( (a,b) => a - b)[0];
  }
}

//  Codewars - Best Solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}