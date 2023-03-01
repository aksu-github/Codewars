/*
Instruction:

Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa). 

Leave any incidence of c untouched.

*/

//  My Solution - Dumb Way

function switcheroo(x){
  let myArr = [];
  for ( let i = 0; i < x.length; i++){
    if ( x[i] == 'a'){
      myArr[i] = 'b';
    } else if (x[i] == 'b') {
      myArr[i] = 'a';
    } else {
      myArr[i] = 'c';
    }
  }
  return myArr.join('');
  
}

//  Codewars - Best Practice

function switcheroo(x){
  let regex = /[ab]/g;
  return x.replace(regex, e => e == 'a' ? 'b' : 'a');
}