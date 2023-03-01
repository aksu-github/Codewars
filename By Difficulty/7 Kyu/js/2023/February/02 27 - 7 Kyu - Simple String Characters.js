/*
Instruction:

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

*/


//  Codewars

//  What I tried to do, but run into null length errors

const solve = x => {
  let u = x.match(/[A-Z]/g)||[]
  let d = x.match(/[a-z]/g)||[]
  let n = x.match(/[0-9]/g)||[]
  let s = x.match(/[^A-Z0-9]/gi)||[]
  return [u.length, d.length, n.length, s.length]
}