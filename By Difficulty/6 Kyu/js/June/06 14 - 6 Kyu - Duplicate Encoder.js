/*
Instruction:

The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character 
appears only once in the original string, or ")" if that character 
appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

//  My Solution 

// function duplicateEncode(word){
//   let wordArr = word.toLowerCase().split('');
//   const wordCountObj = {};

//   wordArr.forEach( e => wordCountObj[e] = (wordCountObj[e] || 0)+1)

//   for (let i = 0; i < wordArr.length; i++){
//     if (wordCountObj[wordArr[i]] == 1){
//       wordArr[i] = '(';
//     } else {
//       wordArr[i] = ')';
//     }
//   }
//   wordArr = wordArr.join('')
//   return wordArr;
//   // console.log(wordArr)
//   // console.log(wordCountObj)
//   // console.log(Object.keys(wordCountObj))
//   // console.log(Object.values(wordCountObj))
// }

duplicateEncode("din")
duplicateEncode("recede")
duplicateEncode("Success")
duplicateEncode("(( @")

//  Codewars - Best Solution

function duplicateEncode(word){
  // word = word.toLowerCase().split('');
  // console.log(word)
  // word.map( (e,i,arr) => console.log(`Index Of: ${arr.indexOf(e)}`))
  // word.map( (e,i,arr) => console.log(`Last Index Of: ${arr.lastIndexOf(e)}`))
  return word
    .toLowerCase()
    .split('')
    .map( function (e, i, arr) {
      return arr.indexOf(e) == arr.lastIndexOf(e) ? '(' : ')'
    })
    .join('');
}