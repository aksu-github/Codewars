/*
Instruction:

In this simple Kata your task is to create a function that turns 
a string into a Mexican Wave. You will be passed a string and you 
must return that string in an array where an uppercase letter is 
a person standing up. 

Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

*/

//  My Solution 

function wave(str){
  if ( str == '' ){
    return [];
  }
  
  let strArr = str.slice().split('');
  let result = '';
  
  for ( let i = 0; i < str.length; i++){
    if ( str[i] != ' '){
      let waveFrame = strArr.slice(0,i).join('') + str[i].toUpperCase() + strArr.slice(i+1,str.length).join('');  
      result += waveFrame + '/';
    }
  }

  let numOfSpaces = strArr.filter( e => e == ' ').length;
  result = result.split('/').splice(0,str.length - numOfSpaces)
//   console.log(result);
  return result;
}

// Codewars - Best Solution 

function wave(str){
  let result =[];

  for ( let i = 0; i < str.length; i++){
    let strArr = str.split('');

    if ( strArr[i] !== ' '){
      strArr[i] = strArr[i].toUpperCase();
      strArr = strArr.join('');
      result.push(strArr);
    }
  }
  return result;
}