/*
Instruction:


The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

//  My Solution 

// function count (string) {  
//    if (string.length){
//       let strObj = {};
//       string.split('').map( e => strObj[e] = (strObj[e] || 0) + 1 )
//       return strObj;
      
//    }
//    return {};
//  }

 count('aba')

 // Codewars
 function count(string){
   let strObj = {};
   string.split('').forEach( e => strObj[e] ? strObj[e]++ : strObj[e] = 1);
   
   return strObj;
 }