/*
Instruction:

Write a function that takes a string of braces, 
and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, 
but introduces new characters: brackets [], and curly braces {}. 

All input strings will be nonempty, 
and will only consist of parentheses, 
brackets and curly braces: 

()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

//  Codewars - Best Solution

function validBraces(braces){
  if (braces.length % 2){
    console.log('false')
    return false;
  } else {
    //  look for () or [] or {} pattern in braces
    let regex = /\(\)|\[\]|\{\}/g;
    
    //  while pattern is true
    while ( regex.test(braces) ){

      // replace () or [] or {} pattern with ''
      braces = braces.replace(regex,'')
      
    }
    console.log(!braces)
    
  }

}

validBraces("(){}[]")
validBraces("([{}])")
validBraces("(}")
validBraces("[(])")
validBraces("[({})](]")
