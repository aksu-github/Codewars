/*
Instruction:


sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

*/

//  My Solution

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}