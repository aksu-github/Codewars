/*
Instruction:

*/

//  My Solution 

//  I feel like I brute forced this.
function partlist(arr) {
  let myArr = [],
      part1 = '',
      part2 = '';
  
  for ( let i = 0; i < arr.length - 1; i++){
    let c = i,
        part2 = '';
    
    part1 += ' ' + arr[i];

    while ( i < arr.length - 1 ){
      part2 += ' ' + arr[i+1]
      i++
    }
    i = c;  
    myArr.push([part1.trim(), part2.trim()]);
  }
  return myArr;
}

//  Codewars

let partlist = function(arr){
  return arr.map( (e,i) => [arr.slice(0,i).join(' '), arr.slice(i).join(' ')]).slice(1)
}