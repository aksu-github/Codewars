/*
Instruction:

The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

*/

//  My Solution 

function foldTo(distance) {
  let x = .0001,
      res = 0;
  
  if ( distance <= 0){
      return null;
  } else {
    while ( distance > x ){
      x *= 2;
      res++;
    }
  }

  return  res
}