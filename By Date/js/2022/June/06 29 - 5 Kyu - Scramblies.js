/*
Instruction:

Complete the function scramble(str1, str2) that returns 
true if a portion of str1 characters can be rearranged to match str2, 
otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

// My Solution

function scramble(str1, str2) {
  let myStr1 = str1.split('').sort().join('');
  let str2Arr = str2.split('').sort();

  //console.log(str2Arr)
  //console.log(myStr1)

  return str2Arr.every( e => {
    let i = myStr1.indexOf(e);
    //console.log(i)
    if ( i > -1){
      myStr1 = myStr1.substring(i+1,myStr1.length)
      //console.log(myStr1)
      return true;
    } else {
      return false;
    }
  })

 }
 
 scramble('rkqodlw', 'world')
 scramble('scriptingjava','javascript')
 scramble('scriptjavx','javascript')

//  Codewars - Best Solution

 function scramble(str1, str2) {
    return [...str2].every(e => str2.split(e).length <= str1.split(e).length);
 }
