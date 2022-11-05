/*
Instruction:

Write a function dirReduc which will take an array of strings and 
returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

*/

//  My Solution

function dirReduc(arr){
  //  convert initial array into something that is able to be regex'd
  let myArr = arr.join(' ')

  //  the regex search criteria
  let regex = /(NORTH SOUTH)|(SOUTH NORTH)|(WEST EAST)|(EAST WEST)/

  //  while search criteria is TRUE, replace it, edit to maintain search capabilities
  while ( regex.test(myArr) ){
    myArr = myArr .replace(regex,'')
                  .trim()
                  .split(/  | /)
                  .join(' ');
  }
  return myArr ? myArr.split(' ') : []
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])

//  Codewars - Closest to my Solution

function dirReduc(arr) {
  let str = arr.join('')
  let regex = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;

  while (regex.test(str)) {
    str = str.replace(regex,'');
  }
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

//  Codewars - Best Solution

function dirReduc(plan) {
  let opposite = {
    'NORTH': 'SOUTH', 
    'EAST': 'WEST', 
    'SOUTH': 'NORTH', 
    'WEST': 'EAST'
  };
  //  reduce() with starting array a = []
  //  if currentValue b === previousValue in array a
  //  slice() and keep everything but last value
  //  else concat to add more into array
  return plan.reduce((a, b) => b === opposite[a.slice(-1)] ? a.slice(0,-1) : a.concat(b), []);
}