/*
Instruction:

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

// // My Solution

// function generateHashtag (str) {
//   if (!str.trim().length ) return false;

//   let myStr = str.trim().split(' ').map( e => e.charAt(0).toUpperCase()+e.slice(1)).filter( e => e != '').join('');
  
//   if ( myStr.length >= 140) return false;
//   return '#'+myStr
// }

generateHashtag(" Hello there thanks for trying my Kata")
generateHashtag("    hello     World   ")
generateHashtag('          ')
generateHashtag("code" + " ".repeat(140) + "wars")

//  Codewars - Best Solution

function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}