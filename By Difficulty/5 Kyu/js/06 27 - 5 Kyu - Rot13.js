/*
Instruction:

ROT13 is a simple letter substitution cipher that replaces 
a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, 
they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".

*/

//  My Solution

function rot13(message){
  let myMsg =  message.split('')
                      .map( function(e){
                        if ( e.toUpperCase() == e.toLowerCase()) {return e;} 
                        else {
                          e = e.charCodeAt()+13;
                          return e > 122 ? String.fromCharCode(e-26)
                              : e > 97 ? String.fromCharCode(e)
                              : e > 90 ? String.fromCharCode(e-26)
                              : String.fromCharCode(e)
                        }
                      })
                      .join('');
  //console.log(myMsg)
  return myMsg;
}

rot13('test!');
rot13('Test')

//  Codewars - Best Solution
function rot13(message){
  let regex = /[a-z]/gi;
  return message.replace(regex, e => String.fromCharCode(e.charCodeAt() + ( e.toLowerCase() <= 'm' ? 13 : -13 )))
}
