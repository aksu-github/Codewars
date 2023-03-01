/*
Instruction:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a 
shorter format, Weekday Month Day that omits the time.

*/

//  My Solution

//  I'm dumb sometimes

function shortenToDate(longDate) {
  let date = longDate.replace(',','').split(' ');
  return `${date[0]} ${date[1]} ${date[2]}`
}

//  Codewars

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}