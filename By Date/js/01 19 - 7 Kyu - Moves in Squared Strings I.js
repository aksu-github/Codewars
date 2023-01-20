/*
Instruction:


*/

//  My Solution

function vertMirror(str) {
  return str.map( e => [...e].reverse().join(''))
}
function horMirror(str) {
  return str.reverse();
}
function oper(fct, s) {
  return fct(s.split('\n').join('\n'))
}