/*
Instruction:

*/

//  My Solution
String.prototype.cap = function(){
  return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
  return `Hello ${name.cap()}!`;
};