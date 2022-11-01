/*
Instruction:

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. 
Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORN

*/

//  My Solution

function meeting(s) {
  let myArr =  s.toUpperCase()
                .split(';')
                .map( e => e.split(':'))
                .sort( (a,b) => {
                  if ( a[1] < b[1] ){
                    return -1;
                  }
                  if ( a[1] > b[1] ){
                    return 1;
                  }
                  return a[0] < b[0] ? -1 : 1;
                  })
                .map( e => e = '(' + e[1]+ ', ' + (e[0]) + ')')
                .join('');
  return myArr;
}

// Codewars - Best Solution 1

function meeting(s) {
  let string = s.toUpperCase()
                .split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(');
  return '(' + string + ')';
}

//  Codewars - Best Solution 2

const meeting = s => {
  return s.toUpperCase()
         .replace(/(\w+):(\w+)/g, "($2, $1)")
         .split(';')
         .sort()
         .join('')
};