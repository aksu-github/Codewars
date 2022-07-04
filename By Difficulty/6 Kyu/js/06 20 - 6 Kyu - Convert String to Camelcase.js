/*
Instruction:

Complete the method/function so that it converts 
dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized 
only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

//  My Solution 

function toCamelCase(str){
  let myStr = str.split(/{s+}|_|-/);
  let myStr1  = myStr.slice(0,1);
  let myStr2  = myStr.slice(1).map( e => e.charAt(0).toUpperCase() + e.slice(1)).join('');

  myStr = myStr1 + myStr2;

  return myStr
}

toCamelCase('')
toCamelCase("the_stealth_warrior")
toCamelCase("The-Stealth-Warrior")
toCamelCase("A-B-C")

//  Codewars - Best Solution

/*
1.  Two regex capture groups because '(.)' used.
2.  Regex match is [_-] + a letter (i.e. _s, -s), but '(.)' captures just the letter.
3.  '_' parameter in (_,c) means parameter will not be used in function.

$1, $2 typically used as capture groups
*/

function toCamelCase(str){
  return str.replace(/[_-](.)/g, (_, $2) => $2.toUpperCase());
}