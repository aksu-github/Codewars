/*
Instruction:

Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

//  My Solution 

function longest(s1, s2) {
  let s3 = s1 + s2;
  
  s3 = s3.split('').sort().join('');

  let set = new Set(s3);
  
  set = Array.from(set).join('')
  return set;
}

longest("aretheyhere", "yestheyarehere")

//  Codewars - Best Solution

//  Uses 'spread parameter'
//  Check out 'rest parameter'
function longest(s1,s2){
  let mergedArr = [...new Set(s1+s2)]
  mergedArr = mergedArr.sort().join('');
  return mergedArr;
}