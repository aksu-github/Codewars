/*
Instruction:

Find capitals and return the index of them

*/

//  My Solution

let capitals = function (word) {
	return  word.split('')
              .map( (e,i) => e == e.toUpperCase() ? i : undefined)
              .filter( e => e != undefined)
};