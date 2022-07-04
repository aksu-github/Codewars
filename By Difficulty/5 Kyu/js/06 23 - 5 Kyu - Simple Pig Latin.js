/*
Instruction:

Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//  My Solution

function pigIt(str){
  let wordStr   = str.split(' ');

  let letterStr = wordStr.map(  (e,i) =>  e.toUpperCase() != e.toLowerCase() ?  (e+e[0]+'ay' ).split('')
                                                                                              .slice(1)
                                                                                              .join('') : e).join(' ');

  return letterStr;
}

pigIt('Hello world !')

//  Codewars - Best Solution

function pigIt(str){
  return str.replace(/\b(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3") // /\b(\w)(\w*)\b/gm     to handle sentences with punctuation and multi-line
}

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}