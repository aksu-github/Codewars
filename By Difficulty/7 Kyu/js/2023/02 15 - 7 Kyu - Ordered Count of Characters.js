/*
Instruction:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/


//  Codewars

function orderedCount( str ){
  return Array.from(str.split('')
                        .reduce( (a,b) => a.set( b, a.has(b) ? a.get(b) + 1 : 1), new Map()));
}