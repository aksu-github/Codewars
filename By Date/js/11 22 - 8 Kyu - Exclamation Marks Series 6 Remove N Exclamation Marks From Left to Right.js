/*
Instruction:

Remove n exclamation marks in the sentence from left to right. n is positive integer.

*/

//  My Solution 

function remove(s,n){
  let c = 0;
  while ( /!/.test(s) && c < n ){
    s = s.replace('!','');
    c++; 
  }
  return s;
}
