/*
Instruction:

Count the number of Duplicates
Write a function that will return the count of distinct 
case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

//  My Solution 

function duplicateCount(text){
  textArr = text.toLowerCase().split('');
  const data = {};
  let count = 0;
  textArr.forEach( e => data[e] = (data[e] || 0)+1);

  for ( key in data ){
    if(data[key] > 1){
      count++
    }
  }
  //console.log(textArr)
  // console.log(data);
  // console.log(count)
  return count;

}

duplicateCount("")
duplicateCount("abcde")
duplicateCount('aA11')
duplicateCount("aabbcde")
duplicateCount("aabBcde")
duplicateCount("Indivisibility")
duplicateCount("Indivisibilities")

//  Codewars - Best Solution

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}