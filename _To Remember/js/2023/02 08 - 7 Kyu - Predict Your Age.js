/*
Instruction:

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.

*/

//  My Solution

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let res = 0;
  for ( let i = 0; i < arguments.length; i++){
    res += arguments[i]**2
  }
  return Math.floor(Math.sqrt(res) / 2);
}

//  Codewars

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

  return Math.hypot(...arguments) / 2 | 0;
}