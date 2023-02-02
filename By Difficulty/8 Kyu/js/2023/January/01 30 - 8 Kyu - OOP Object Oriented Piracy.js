/*
Instruction:

You have access to the ship "draft" and "crew". 

"Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. 

If after removing the weight of the crew, the draft is still more than 20, 
then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt

*/

//  My Solution

//  Not good practice since when a new ship is instantiated, isWorthIt is also created each time
function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
   
   this.isWorthIt = function(){
     return draft - crew * 1.5 > 20 ? true : false;
   }
 }

 // Codewars - Best Solution (Best Practice)

 function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
 }

Ship.prototype.isWorthit = function(){
  return this.draft - this.crew * 1.5 > 20;
}