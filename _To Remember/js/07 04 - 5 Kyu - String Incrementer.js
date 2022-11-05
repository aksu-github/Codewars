/*
Instruction:

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
*/

//  My Solution

// function incrementString (str) {
//   // \D == [^\d]
//   let regex1 = /\d+/g;
//   let regex2 = /\D+/
//   let myStr1 = str.split(regex1);
//   let myStr2 = str.split(regex2);

//   myStr2 = myStr2.join('').trim()

//   let padLength = myStr2.length

//   if ( myStr1.length == 1 ){
//     console.log(myStr1 + 1);
//     return myStr1 + 1
//   }
//   if ( (Number(myStr2)+1).toString().length < padLength ){
//     myStr1[1] = (Number(myStr2)+1).toString().padStart(padLength, '0');
//     // console.log(myStr1.join(''))
//     return myStr1.join('')
//   } else {
//     myStr1[1] = (Number(myStr2)+1).toString();
//     // console.log(myStr1.join(''))
//     return myStr1.join('')
//   }
  
// }
incrementString("foo");
incrementString("foobar000");
incrementString("foobar23");
incrementString('foo099')

//  Codewars

function incrementString(str){
  let regex = /[0-8]?9*$/
  let myStr1 = str.replace(regex, e => ++e)
  console.log(myStr1)
}