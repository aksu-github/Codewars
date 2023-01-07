/*
Instruction:

Your task is to implement the authenticate() method of the sleigh, 
which takes the name of the person, who wants to board the sleigh 
and a secret password. If, and only if, the name equals "Santa Claus" 
and the password is "Ho Ho Ho!" (yes, even Santa has a secret password 
  with uppercase and lowercase letters and special characters :D), 
  the return value must be true. Otherwise it should return false.

*/

//  My Solution 

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name=='Santa Claus' && password=='Ho Ho Ho!';
};

//  Codewars - Best Practice?

function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function(name, password) {
  return this.name == name && this.password == password;
};