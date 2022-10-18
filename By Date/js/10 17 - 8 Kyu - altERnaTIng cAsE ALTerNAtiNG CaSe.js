/*
Instruction:

Define String.prototype.toAlternatingCase
such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
*/

//  My Solution

String.prototype.toAlternatingCase = function () {

  let regex = /[a-z]/ig;
  
  function replaceWith(match, offset, string){
    //console.log(match.charCodeAt(0))
    return match.charCodeAt(0) >= 97 ? match.toUpperCase() : match.toLowerCase();
  }
  //console.log(this.replace(regex, replaceWith))
  return this.replace(regex, replaceWith)
}

// Codewars

String.prototype.toAlternatingCase = function () {
  //  can also use /./g to match any char instead of /[a-z]/ig
  let tester = /[a-z]/ig;
  let regex = /[a-z]/;

  return this.replace( tester, function(match){
    return regex.test(match) ? match.toUpperCase() : match.toLowerCase();
  })
}