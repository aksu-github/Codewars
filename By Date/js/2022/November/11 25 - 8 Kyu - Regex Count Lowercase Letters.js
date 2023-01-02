/*
Instruction:

Your task is simply to count the total number of lowercase letters in a string.

*/

//  My Solution 

function lowercaseCount(str){
    return str.replace(/[^a-z]/g,'').length;
  }

//  Codewars - Best Solution

function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}