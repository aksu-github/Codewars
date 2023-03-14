/*
Instruction:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'

*/

//  My Solution

function decipherThis(str) {
  let myArr = str.split(' ');
  
  for ( let i = 0; i < myArr.length; i++){
    let x = myArr[i].replace(/\d+/, replacer);
    x = x.replace(/^(\w)(\w)(\w*)(\w)$/, '$1$4$3$2');
    myArr[i] = x;
  }
  return myArr.join(' ');
}; 

function replacer(numAsStr){
  return String.fromCharCode(numAsStr);
}

//  Codewars - My Solution but cleaner

function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}

//  Codewars - The Solution I Tried to Do

//  Not sure why I could not use ^ and $ to mark beginning and end of word
//  Had to use \b for word boundary

function decipherThis(str){
  let regex = /\b(\d+)(\w?)(\w*?)(\w?)\b/g;
  return str.replace(regex, (_, $1, $2, $3, $4) => String.fromCharCode($1)+$4+$3+$2)
}