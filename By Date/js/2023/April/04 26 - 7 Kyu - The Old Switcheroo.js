/*
Instruction:

Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

*/

//  My Solution

function vowel2index(str) {
  return str.replace(/[aeiou]/ig, (_,i) => i+1);
}

let vowel2index = str => str.replace(/[aeiou]/ig, (_,i) => i+1);