/*
Instruction:

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

//  My Solution

// function solution(str){
//   if ( str.length % 2 == 1){
//     str = str+'_'
//   }
//   let myStr = str.split(/(.{2})/ig).filter( e => e.toUpperCase() !== e.toLowerCase());
//   console.log(myStr)
//   return myStr;
// }

solution('abc')
solution('abcdef')


//  Codewars - Best Solution

function solution(str){

  //  /i --> case insensitve
  //  /g --> keep going after first occurence
  
  let myStr = (str+'_').match(/(.{2})/ig);
  //console.log(myStr)
  return myStr || [];
}