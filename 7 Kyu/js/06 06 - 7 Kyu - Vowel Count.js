/*
Instruction:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//  My Solution

// function getCount(str) {
//     let vowelsCount = 0;
//     let regex = /[^aeiou]/g;

//     vowelsCount = str.replace(regex, '').length;

//     return vowelsCount;
// }


//  Codewars - Best Solution

function getCount(str) {
    let regex = /[aeiou]/ig;
    //console.log((str.match(/[aeiou]/ig)||[]).length);
    return (str.match(/[aeiou]/ig)||[]).length;
  }

getCount("abracadabra")
getCount("my pyx")