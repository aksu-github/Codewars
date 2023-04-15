/*
Instruction:

*/

//  My Solution

function calculate(num1, operation, num2) {
  switch(operation){
      case '+':
        return num1+num2;
        break;
      case '-':
        return num1-num2;
        break;
      case '*':
        return num1*num2;
        break;
      case '/':
        return num2 !== 0 ? num1/num2 : null;
        break;
      default:
        return null;
  }
}

//  Codewars - Best Practice

function calculate(num1, operation, num2) {
  const ops = {
    "+": () => num1 + num2,
    "-": () => num1 - num2,
    "*": () => num1 * num2,
    "/": () => num2 !== 0 ? num1 / num2 : null
  };
  return ops[operation] ? ops[operation]() : null;
}