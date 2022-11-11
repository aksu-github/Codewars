/*
Instruction:

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

//  My Solution 

var encryptThis = function(text) {
  
  let res = [];
  text.split(' ').forEach( e => {
    if (e.length > 2){
      let temp = e[1];
      e = e.split('');
      e[1] = e[e.length-1];
      e[e.length-1] = temp;
      e = e.join('');
    }
    e = e.charCodeAt(0) + e.slice(1);
    res.push(e);
  })
  return res.join(' ');
}

//  Codewars - Best Solution

const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

const encryptThis = str => str.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (a,b,c,d) => a.charCodeAt() + d + c + b);