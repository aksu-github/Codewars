/*
Instruction:

You've just moved into a perfectly straight street with exactly 
n identical houses on either side of the road. 

Naturally, you would like to find out the house number of the 
people on the other side of the street. 

The street looks something like this:

Street
1|   |6
3|   |4
5|   |2

Given your house number address and length of street n, 
give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8

*/

//  Codewars

function overTheRoad(address, n){
  return -address + n*2+1
}