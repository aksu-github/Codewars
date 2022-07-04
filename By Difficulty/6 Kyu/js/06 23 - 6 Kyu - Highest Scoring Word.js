/*
Instruction:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

//  My Solution

function high(str){
  let myStr = str.split(' ')
                  .map( (e,i,a) => e.split('')
                                    .map( (e,i) => e.charCodeAt()-96)
                                                    .reduce((a,b) => a+b))
  let myStr2 = str.split(' ')

  let index = myStr.findIndex( e => e == Math.max(...myStr))

  return myStr2[index]
}

high('man i need a taxi up to ubud')

//  Codewars - Best Solution

function high(str){
  let myStr = str.split(' ')
                  .map( (e,i,a) => e.split('')
                                    .map( (e,i) => e.charCodeAt()-96)
                                                    .reduce((a,b) => a+b))

  let index = myStr.indexOf( Math.max(...myStr))

  return str.split(' ')[index]
}