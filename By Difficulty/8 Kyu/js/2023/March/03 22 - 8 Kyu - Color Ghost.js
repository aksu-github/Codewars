/*
Instruction:

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

*/

//  My Solution

let Ghost = function(){
  const color = ['white','yellow','purple','red'],
        colorIndex = Math.random() * color.length | 0;
  this.color = color[colorIndex];
}