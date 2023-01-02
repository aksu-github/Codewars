/*
Instruction:

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

//  My Solution 
//  Tried to not use FOR loops

multiplicationTable = function(size) {
  let res = [];
  
  let myRow = Array.from( {length: size}, (e,i) => i+1 );
  
  myRow.forEach( (e,i) => {
    let myCol = Array.from( {length: size}, (e2,i2) => (i2+1)*(i+1));
    res.push(myCol);
  })
  
  return res;
}

//  Codewars - Most Similar to Mine

multiplicationTable = function(n) {
  return Array.from( {length:n}, (_,i) => Array.from( {length:n}, (_,j)=>(i+1)*(j+1) ))
}