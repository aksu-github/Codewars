/*
Instruction:


*/

//  My Solution

reverse = function(array) {
  let myArr = [];
  for ( let i = array.length - 1; i >= 0; i--){
    myArr.push(array[i])
  }
  return myArr;
}