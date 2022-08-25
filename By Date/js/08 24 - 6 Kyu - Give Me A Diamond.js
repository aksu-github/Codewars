/*
Instruction:

You need to return a string that looks 
like a diamond shape when printed on the screen, 
using asterisk (*) characters. 
Trailing spaces should be removed, 
and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, 
as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"

*/

//  My Solution 

function diamond(n){
  if ( n % 2 == 0 || n < 1 ){
    return null;
  }
  
  let myArr = [];
  
  for ( let i = 1; i <= n; i+=2){
    myArr.push('*'.repeat(i) + '\n' )
  }
  
  myArr = myArr.map( (e,i,a) => e = ' '.repeat(a.length-i-1) + e)
  
  let myArrFirstHalf = myArr.slice(0,-1).reverse()
  myArr = myArr.concat(myArrFirstHalf).join('')
  
//   console.log(myArr)
  return myArr
}

//  Codewars - Best Solution

function diamond(n) {
  if ( n < 1 || n % 2 == 0){
    return null
  }

  let str = '';

  for ( let i = 0; i < n; i++){
    let len = Math.abs((n-2*i-1)/2);
    str += ' '.repeat(len);
    str += '*'.repeat(n-2*len);
    str += '\n';
  }
  return str;
}