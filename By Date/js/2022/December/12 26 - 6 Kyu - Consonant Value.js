/*
Instruction:

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z d cs"

*/

//  My Solution 

function solve(s) {

  let regex = /[aeiou]/g,
      myArr = s.split(regex).filter( e => e),
      res = 0;
  
      for ( let i = 0; i < myArr.length; i++){
        let temp = 0;
        for ( let j = 0; j < myArr[i].length; j++){
          temp+=myArr[i][j].charCodeAt(myArr[i][j])-96
          if ( temp > res ){
            res = temp;
          }     
        }      
      }
  return res;
};

//  Codewars - What I tried to do

function solve(s) {

  return s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);
};