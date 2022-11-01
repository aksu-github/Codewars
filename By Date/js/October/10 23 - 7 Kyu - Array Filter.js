/*
Instruction:

JavaScript Arrays support a filter function 
(starting in JavaScript 1.6). 
Use the filter functionality to complete the function given.

*/

//  My Solution

function getEvenNumbers(numbersArray){
    return numbersArray.filter( e => !(e % 2 ));
  }