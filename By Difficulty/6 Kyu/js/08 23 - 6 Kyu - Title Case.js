/*
Instruction:

A string is considered to be in title case if each word in the string is either 
(a) capitalised (that is, only the first letter of the word is in upper case) or 
(b) considered to be an exception and put entirely into lower case unless it is the first word, 
which is always capitalised.

Write a function that will convert a string into title case, 
given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each 
word separated by a space. Your function should ignore the case of the 
minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

*/

//  My Solution 

function titleCase(title, minorWords) {
  if ( title == '')
    return '';
  
  if ( minorWords ){
    let minorArr = minorWords.split(' ');
    let myArr = title.split(' ').map( e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    
    for ( let i = 1; i < myArr.length; i++){
      for ( let j = 0; j < minorArr.length; j++){
        if (myArr[i].split('').map( e => e.toLowerCase()).join('') == minorArr[j].split('').map( e => e.toLowerCase()).join('')){
          myArr[i] = myArr[i].split('').map( e => e.toLowerCase()).join('');
        }
      }
    }
    myArr = myArr.join(' ');
    return myArr;
  } else {
    let myArr = title.split(' ').map( e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    myArr = myArr.join(' ');
    return myArr;
  }
}

//  Codewars - Best Solution w/o Creating Prototype

function titleCase(title, minorWords){
  minorWords = typeof(minorWords) !== 'undefined' ? minorWords.toLowerCase().split(' ') : [];

  return title.toLowerCase()
              .split(' ')
              .map( function(e,i) {
                if ( e != "" && (minorWords.indexOf(e) == -1 || i == 0)){
                  e = e.split('');
                  e[0] = e[0].toUpperCase();
                  e = e.join('');
                }
                return e;
              })
              .join(' ');
}

//  Codewars - Best Solution Creating Prototype

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  let titleArr = title.toLowerCase().split(' ');
  let minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
  
  return titleArr.map( (e,i) => minorWordsArr.indexOf(e) == -1 || i == 0 ? e.capitalize() : e)
                 .join(' ');
}