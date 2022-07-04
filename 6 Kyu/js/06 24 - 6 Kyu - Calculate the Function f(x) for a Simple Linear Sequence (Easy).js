/*
Instruction:

For any given linear sequence, calculate the function [f(x)] and return it as a string.

For example:

getFunction([0, 1, 2, 3, 4]) => "f(x) = x"
getFunction([0, 3, 6, 9, 12]) => "f(x) = 3x"
getFunction([1, 4, 7, 10, 13]) => "f(x) = 3x + 1"
Assumptions for this kata are:

the sequence argument will always contain 5 values equal to f(0) - f(4).
the function will always be in the format "nx +/- m", 'x +/- m', 'nx', 'x' or 'm'

*/

//  My Solution - Best Solution

function getFunction(sequence) {
  
  let m = sequence[1] - sequence[0];
  let b = sequence[0];

  return printFxn(m,b,sequence);
}

function printFxn(mVar, bVar, arr){
  for ( let i = 0; i < arr.length; i++){
    if ( i * mVar + bVar != arr[i]){
      return `Non-linear sequence`;
    }
  }

  let mVarDisplay = mVar === 1  ? 'x' : 
                    mVar === -1 ? '-x' : 
                    mVar !== 0  ? mVar+'x' :
                    '';
  let bVarDisplay = bVar ? Math.abs(bVar) :  '';
  let opDisplay   = mVar !== 0 && bVar > 0 ? ' + ' :
                    mVar !== 0 && bVar < 0 ? ' - ' :
                    '';

  return `f(x) = ${mVarDisplay}${opDisplay}${bVarDisplay}`
}

getFunction([0, 1, 2, 3, 4])