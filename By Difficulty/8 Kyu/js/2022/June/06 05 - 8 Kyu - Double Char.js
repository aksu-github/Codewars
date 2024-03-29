/*
Instruction:

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

*/

//  My Solution - Best Solution

function doubleChar(str) {
    return str.split('').map(e => `${e}${e}`).join('')
}

doubleChar("abcd")
doubleChar("1337")
doubleChar("%^&*(")