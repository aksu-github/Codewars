/*
Instruction:

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

*/

//  My Solution 

//  This took wayyyyyy too long for a 7 Kyu

function nbDig(n, d) {

  let myObj = {};

  for ( let i = 0; i < n; i++){
      ((i+1)**2).toString().split('').forEach( e => myObj[e] ?  myObj[e]++ :  myObj[e] = 1);
  }
  return d == 0 ? myObj[d]+1 : myObj[d];
  
}

//  Codewars - Best Solution

function nbDig(n, d) {
  let res = '';
    for(let i = 0; i <= n; i++){
      res += Math.pow(i, 2);
    }
  return res.split(d).length-1;
}