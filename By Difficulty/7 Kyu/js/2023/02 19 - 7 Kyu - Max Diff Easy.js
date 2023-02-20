/*
Instruction:

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted

[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

*/


//  My Solution

function maxDiff(list) {
  if ( list.length > 1 ){
    return Math.max(...list) - Math.min(...list);
  }
  return 0;
};