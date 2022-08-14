/*
Instruction:

Write a function that takes a list of strings as an 
argument and returns a filtered list containing the 
same elements but with the 'geese' removed.


*/

//  My Solution 

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter( e => !geese.includes(e))
}

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter( e => geese.indexOf(e) < 0 )
}