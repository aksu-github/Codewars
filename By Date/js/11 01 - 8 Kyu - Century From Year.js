/*
Instruction:

Given a year, return the century it is in.

*/

//  My Solution 

function century(year) {
  return year % 100 ? (year - (year % 100)) / 100 + 1 : year / 100;
}

//  Codewars - Most Similar to Mine

function century(year){
  return year % 100 ? parseInt( year / 100 ) + 1 : parseInt( year / 100 );
}

//  Codewars - Best Solution
function century(year){
  return Math.ceil(year/100);
}