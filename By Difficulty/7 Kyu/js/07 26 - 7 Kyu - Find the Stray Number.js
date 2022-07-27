/*
Instruction:

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

//  My Solution 

//  Struggled a little too much for a 7 Kyu
function stray(numbers) {
  
  function getObjKey( obj ){
    return Object.keys(obj).find( e => obj[e] === 1);
  }
  let obj_Numbers = {};
  
  numbers.forEach( e => obj_Numbers[e] ? obj_Numbers[e]++ : obj_Numbers[e] = 1)

  return Number(getObjKey(obj_Numbers));
  
}

//  Codewars - Best Solution

function stray(numbers){
  return numbers.find( (e,i,a) => a.indexOf(e) === a.lastIndexOf(e) );
}