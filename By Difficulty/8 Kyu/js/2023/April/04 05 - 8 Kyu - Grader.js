/*
Instruction:

*/

//  My Solution

function grader(score) {
  if ( score > 1 ){
    return 'F'
  }
  if (score >= .9){
    return 'A';
  } else if ( score >= .8 ){
    return 'B';
  } else if ( score >= .7 ){
    return 'C';
  } else if ( score >= .6 ){
    return 'D';
  } else {
    return 'F';
  }
}

//  Codewarws

function grader(score) {
  if (score>1||score<0.6) return 'F'
  if (score<0.7) return 'D'
  if (score<0.8) return 'C'
  if (score<0.9) return 'B'
  return 'A'
}