/*
Instruction:

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

*/

//  My Solution - Best Solution

function squareArea(A){
  //Perimeter = P = 4 A
  //            P = 2 PI() r
  //therefore,             r = ( 2 A ) / PI()
  //Area of Square = r^2 = 4 A^2 / PI()^2

  return Number((( 4 * A ** 2 ) / ( Math.PI )**2).toFixed(2));  // Most people did something similar to this to get 2 decimal
                                                                // Math.round(area*100)/100
}