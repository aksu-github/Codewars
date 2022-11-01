/*
Instruction:

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

*/

//  My Solution

function betterThanAverage(classPoints, yourPoints) {
  
  let avg = arr => arr.reduce( (a,b) => a + b, 0) / arr.length ;
  
  return yourPoints >= avg(classPoints)
}

