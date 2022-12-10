/*
Instruction:

Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

//  My Solution 

function abbrevName(name){
  let myName = name.toUpperCase();
  return myName.split(' ')[0][0] + '.' + myName.split(' ')[1][0];
}