/*
Instruction:

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), 
return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

*/

//  My Solution - Didnt Work Dont know why

function duckDuckGoose(players, goose) {
  
  for ( let i = 0; i < players.length; i++){
    if ( i + 1 == goose ){
      return players[i].name;
    }
  }
}

//  Codewars - Best Practices

function duckDuckGoose(players, goose) {
  
  return players[(goose-1)%players.length].name
}