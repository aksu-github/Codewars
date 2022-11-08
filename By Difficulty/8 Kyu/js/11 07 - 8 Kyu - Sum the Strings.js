/*
Instruction:

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

*/

//  My Solution 

function sumStr(a,b) {
  let myArr = [ Number(a) , Number(b) ];
  return myArr.reduce( (a,b) => a + b, 0).toString();
}

//  Codewars - Best Solution

function sumStr(a,b) {
  //  (+a+ +b)+''
  return (+a+ +b).toString()  
}