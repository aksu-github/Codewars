/*
Instruction:

Add the value "codewars" to the array websites/Websites 1,000 times.
*/

//  My Solution - Dumb Way

var websites = []

for ( let i = 0; i < 1000; i++){
  websites.push('codewars')
}

//  Codewars - What I tried to do
//  [].repeat(1000) since you can return an array as ' return [ x , y ] ' 

var websites = new Array(1000).fill("codewars");