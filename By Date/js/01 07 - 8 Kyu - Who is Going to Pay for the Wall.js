/*
Instruction:

our code will show Full name of the neighbor and the truncated version 
of the name as an array. If the number of the characters in name is less 
than or equal to two, it will return an array containing only the name as is"

*/

//  My Solution 

function whoIsPaying(name){
  return name.length <= 2 ? [name] : [name, name.slice(0,2)];
}