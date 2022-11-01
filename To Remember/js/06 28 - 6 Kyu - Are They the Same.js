/*
Instruction:

Given two arrays a and b write a function comp(a, b) 
(orcompSame(a, b)) that checks whether the two arrays 
have the "same" elements, with the same multiplicities 
(the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

*/

//  My Solution

function comp(array1, array2){
  if (array1 == null || array2 == null) return false;
  
  let myArr1 = array1.sort( (a,b) => a-b ).map( e => Math.pow( e, 2 ));
  let myArr2 = array2.sort( (a,b) => a-b );

  return myArr1.every( (e,i) => e == myArr2[i])
}