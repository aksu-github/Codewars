/*
Instruction:



*/

//  My Solution 

const sequenceSum = (begin, end, step) => {
  let res = 0;
  for ( let i = begin; i <= end; i+=step){
    res+=i;
  }
  return res;
};