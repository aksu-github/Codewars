/*
Instruction:

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%

*/

//  My Solution

function calculateTip(amount, rating) {
  const rate = {
    'poor': .05,
    'good': .1,
    'great': .15,
    'excellent': .2
  }
  if ( rating.toLowerCase() == 'terrible'){
    return 0;
  }

  return rate[rating.toLowerCase()] ? Math.ceil(rate[rating.toLowerCase()] * amount) : 'Rating not recognised';
}

//  Codewars

function calculateTip(amount, rating) {

  var tips = { 
    'terrible'  : 0, 
    'poor'      : .05, 
    'good'      : .1, 
    'great'     : .15, 
    'excellent' : .2 
  }
  
  rating = rating.toLowerCase();

  return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";
  
}