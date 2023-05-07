/*
Instruction:

Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
maxTriSum ({3,2,6,8,2,3}) ==> return (17)

*/

//  Codewars

const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}