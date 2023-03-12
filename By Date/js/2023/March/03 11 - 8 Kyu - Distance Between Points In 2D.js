/*
Instruction:

*/

//  My Solution

function distanceBetweenPoints(a, b) {
  return Math.sqrt( (b.x - a.x)**2 + (b.y - a.y)**2 )
}

//  Codewars

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}