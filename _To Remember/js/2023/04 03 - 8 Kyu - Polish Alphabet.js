/*
Instruction:

*/

//  Codewars

function correctPolishLetters (string) {
    const dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, e => dict[e]);
  }