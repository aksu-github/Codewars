/*
Instruction:

Create a combat function that takes the player's current health 
and the amount of damage recieved, and returns the player's new health. 

Health can't be less than 0.

*/

//  My Solution

function combat(health, damage) {
  return health > damage ? health - damage : 0;
}

//  Codewars - Clever Solution

function combat(health, damage){
  return Math.max( 0, health - damage);
}