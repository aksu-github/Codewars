/*
Instruction:

If one of the flowers has an even number of petals and 
the other has an odd number of petals it means they are in love.


*/

//  My Solution 

function lovefunc(flower1, flower2){
  if ( flower1 % 2 == 0){
    return flower2 % 2 !=0;
  }
  if ( flower2 % 2 == 0){
    return flower1 % 2 !=0;
  }
  return false;
}

//  Codewars - Best Solution

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}