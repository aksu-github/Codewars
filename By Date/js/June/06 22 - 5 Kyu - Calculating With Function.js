/*
Instruction:

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

// Codewars - Basic Best Solution

// This is how I can start coding basic abstraction

function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { 
  return function( a ) { 
    return a + b; 
  }; 
};
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };

//  Codewars

//  Then I can abstract again to simplify the code
let F = function(digit) {
  return function(func) {
    return func ? func(digit) : digit;
  }
};
let zero  = F(0);
let one   = F(1);
let two   = F(2);
let three = F(3);
let four  = F(4);
let five  = F(5);
let six   = F(6);
let seven = F(7);
let eight = F(8);
let nine  = F(9);

function plus(r) { 
  return function(l) { 
    return l + r;
  };
}
function minus(r) { 
  return function(l) { 
    return l - r; 
  }; 
}
function times(r) { 
  return function(l) { 
    return l * r; 
  }; 
}
function dividedBy(r) { 
  return function(l) { 
    return l / r; 
  }; 
}

// //  Codewars

/*

I.The javascript is running from the inside 1st right?

then it will try to calculate three() meaning 3 , there is nothing hard here

II.now to the plus(three())

plus(three()) == plus(3)
if u trying to console.log(plus(three())), u will see it return

return function (a) { return a + n }
and nothing is calculated. or i can say

two(plus(three))        ==        two(return function (a) { return a + 3 })
III. Remember two(something_in_here) function? it

return something_in_here(2)
or i can say

two(plus(three))    ==    return f(2)
To summarize all from 1-> 3, we have everything explained below

  two(plus(three))    ==    two(return function (a) { return a + n })
  return f(2)         ==    return function (a) { return a + 3 }) //we remove the sames of 2 sides of this equation
  f(2)                ==    function (a) { return a + 3 })

*/

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {

  this[name] = function (f) { return f ? f(n) : n }
  
});

function plus(n)      { return function (a) { return a + n } }
function minus(n)     { return function (a) { return a - n } }
function times(n)     { 
  return function (a) { 
    return a * n 
  } 
}
function dividedBy(n) { return function (a) { return a / n } }


seven(times(five()))
