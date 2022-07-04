/*
Instruction:

Three semicircles are drawn on AB, AD, and AF. Here CD is perpendicular to AB and EF is perpendicular to AD.

Task
Given the radius of the semicircle ADBCA, find out the area of the lune AGFHA (the shaded area).

*/

//  My Solution - Best Solution

function bloodMoon(r){
  let areaCircle = Math.PI * r**2 / 8;
  let areaTriangle = 0.5 * ( 0.5 * r * Math.sqrt(2))**2;
  return (Math.PI * 0.5 * (r/2)**2) - (areaCircle - areaTriangle)
}