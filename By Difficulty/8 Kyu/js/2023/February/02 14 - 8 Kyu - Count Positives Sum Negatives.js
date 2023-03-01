/*
Instruction:



*/

//  My Solution

function countPositivesSumNegatives(input) {
  if ( !input || input.every( e => e == 0 )){
    return [];
  }
  let pos = 0,
      neg = 0;
  
  for ( let i = 0; i < input.length; i++){
    if ( input[i] > 0 ){
      pos++;
    } else {
      neg += input[i];
    }
  }
  return [pos, neg]
}