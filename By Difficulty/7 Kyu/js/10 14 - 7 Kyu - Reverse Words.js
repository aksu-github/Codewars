/*
Instruction:

Complete the function that accepts a string parameter, 
and reverses each word in the string. 

All spaces in the string should be retained.

*/

//  My Solution

function reverseWords(str) {
  let words = str.split(' ');
  words = words.map( e => e = e.split('').reverse().join(''));
  return words.join(' ');
}

//  Codewars

function reverseWords(str) {
  return str.split(' ')
            .map( e => e = e.split('').reverse().join(''))
            .join(' ');
}