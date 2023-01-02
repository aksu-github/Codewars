/*
Instruction:

n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

//  My Solution 

function generateShape(integer){
  let res = '';
  for ( let i = 0; i < integer; i++){
    res+='+'.repeat(integer);
    if ( i < integer - 1){
      res+='\n'
    }
  }
  return res;
}

//  Codewars - Best Solution

function generateShape(i){
  return ('+'.repeat(i)+'\n').repeat(i).trim();
}