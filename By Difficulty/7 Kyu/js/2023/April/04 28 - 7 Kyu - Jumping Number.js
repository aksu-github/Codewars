/*
Instruction:

Jumping number is the number that All adjacent digits in it differ by 1

*/

//  My Solution

function jumpingNumber(n){
  let nArr = n.toString().split('');
  if ( nArr.length == 1){
    return 'Jumping!!';
  }
  for ( let i = 0; i < nArr.length - 1; i++){
    if ( Math.abs(nArr[i] - nArr[i+1]) > 1 ){
      return 'Not!!';
    }
  }
  return `Jumping!!`;
}

//  Codewars

function jumpingNumber(n){
  return [...n+''].every((e,i,a) => i===0 || Math.abs(a[i-1] - e) === 1 ) ? 'Jumping!!':'Not!!'
}