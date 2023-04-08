/*
Instruction:

Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

//  My Solution

function highestRank(arr){
  let seen = arr.reduce( (a,b) => {
    a[b] = a[b] || 0;
    a[b]++;
    return a;
  }, {});
  Object.keys(seen).sort( (a,b) => seen[a] - seen[b]);
  return +Object.keys(seen).reduce( (a,b) => seen[a] > seen[b] ? a : b);
}

//  Codewars

function highestRank(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}