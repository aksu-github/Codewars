/*
Instruction:

If the wolf is the closest animal to you, 
return "Pls go away and stop eating my sheep". 

Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" 

where N is the sheep's position in the queue.

*/

//  My Solution 

function warnTheSheep(queue) {
  for ( let i = queue.length - 1; i >= 0; i--){
      if ( queue[queue.length - 1] == 'wolf'){
        return 'Pls go away and stop eating my sheep';
      }
      
      if ( queue[i] == 'wolf' ){
        return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`;
      }
  }
}