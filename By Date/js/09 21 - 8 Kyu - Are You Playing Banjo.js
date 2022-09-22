/*
Instruction:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

*/

//  My Solution 

function areYouPlayingBanjo(name) {
  name = name[0].toUppercase() === 'R' ? name + ' plays banjo' : name + ' does not play banjo';
  return name;
}

//  Codewars - Best Solution

function areYouPlayingBanjo(name) {
  name += (name[0].toUppercase() === 'R' ? ' plays' : 'does not play') +  ' banjo';
  return name;
}