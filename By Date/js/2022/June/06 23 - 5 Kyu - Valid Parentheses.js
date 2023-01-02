/*
Instruction:

Write a function that takes a string of parentheses, 
and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(()) (( ()() ) ())"  =>  true
Constraints
0 <= input.length <= 100

*/

//  My Solution

function validParentheses(parens) {
  if (parens.length % 2 || parens[0] == ')' || parens[parens.length] == '('){
    return false;
  } else {
    let myParens = parens;

    while ( myParens.includes('()')){
      myParens = myParens.split('()').join('')
    }

    return myParens.length ? false : true;
  }
}

validParentheses( "()()((()" )
validParentheses('(()()))(')

//  Codewars - Best Solution

function validParentheses(parens){
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  return n == 0;
}

function validParentheses(parens){
  let regex = /\(\)/;
  while (regex.test(parens)) parens = parens.replace(regex, "");
  return !parens;
}