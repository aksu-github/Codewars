/*
Instruction:

You are given an array (which will have a length of at least 3, but could be very large) 
containing integers. 
The array is either entirely comprised of odd integers or entirely comprised 
of even integers except for a single integer N. Write a method that takes the array 
as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

//  My Solution 

// function findOutlier(integers){
//   let converted = integers.map(e => Math.abs(e % 2));
//   let evenLength = converted.filter( n => n==0).length;
//   let oddLength = converted.filter( n => n==1).length
//   //console.log(converted.find(n => converted.indexOf(1)))

//   //  at() method only works on 16.6 or above
//   //return evenLength > oddLength ? integers.at(converted.indexOf(1)) : integers.at(converted.indexOf(0))


//   //console.log(evenLength > oddLength ? integers[converted.indexOf(1)] : integers[converted.indexOf(0)])
//   return evenLength > oddLength ? integers[converted.indexOf(1)] : integers[converted.indexOf(0)]
// }
findOutlier([0, 1, 2])
findOutlier([1, 2, 3])
// findOutlier([2,6,8,10,3])
// findOutlier([0,0,3,0,0])
// findOutlier([1,1,0,1,1])
// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
// findOutlier([160, 3, 1719, 19, 11, 13, -21])


//  Codewars - Best Solution
function findOutlier(int){
  let even = int.filter( a => a % 2 == 0 );
  let odd = int.filter( a => a % 2 == 1 );
  // console.log(even)
  // console.log(odd)
  return even.length==1? even[0] : odd[0];
}