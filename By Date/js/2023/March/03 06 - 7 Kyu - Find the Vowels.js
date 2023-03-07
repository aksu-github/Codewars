/*
Instruction:

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES
Vowels in this context refers to: a e i o u y (including upper case)

*/

//  My Solution 

function vowelIndices(word){
  let res = [],
      vowel = 'aeiouyAEIOUY';
  for ( let i = 0; i < word.length; i++){
    if ( vowel.match(word[i])){
      res.push(i+1)
    }
  }
  return res;
}

//  Codewars

function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}