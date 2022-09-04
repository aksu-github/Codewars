/*
Instruction:

Given an integer as input, 
can you round it to the next 
(meaning, "greater than or equal") multiple of 5?

*/

//  My Solution 


//  Took a while, but I finally figured out the one-liner
function roundToNext5(n){
  return  n ? Math.ceil( n / 5) * 5 : n;
}

