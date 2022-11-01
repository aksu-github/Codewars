/*
Instruction:

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

*/

//  My Solution

//  Old way of mimicking 'class' in JS before class was introduced
let Ball = function(ballType) {
    // Tried using this[ballType] to instatntiate, didn't work.
    return ballType ?  this.ballType = ballType : this.ballType = 'regular';
  
};

function Ball(){
    this.ballType = function(){
        return ballType || 'regular';
    }
}


class Ball {
    constructor(ballType) {
      this.ballType = ballType || 'regular';
    }
}