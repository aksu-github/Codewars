/*
Instruction:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams 
of a word from a list. 
You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

//  My Solution

// function anagrams(word, words) {
 
//   wordVal = word.split('').map( e => e.charCodeAt()).reduce((a,b) => a+b)
//   wordsVal = words.map(e => e.split('').map( e => e.charCodeAt()).reduce((a,b) => a+b))
  
//   //console.log(words.filter( (e,i,a) => wordVal == wordsVal[i] ? e : null))
//   let match = words.filter( (e,i,a) => wordVal == wordsVal[i] ? e : null);
//   return match;
// }

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])

//  Codewars - Best Solution

function anagrams(word, words) {
  word = word.split('').sort().join('');
  console.log(words.filter( function(v) {
    return word == v.split('').sort().join('');
  }));
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}