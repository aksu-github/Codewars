/*
Instruction:

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

// //  My Solution

// function expandedForm(num) {
//   let data = [];

//   num.toString().split('').map( (e,i,a) => e != 0 ? data.push(e.padEnd( a.length-i,0)) :  null);
  
//   return data.join(' + ')
// }
expandedForm(70304)
expandedForm(4982342)

//  Codewars - Best Solution

function expandedForm(num) {
  //console.log(num.toString().split('').map( (e,i,a) => e.padEnd( a.length - i,0 )).filter( e => Number(e) != 0).join(' + '))
  return num.toString().split('').map( (e,i,a) => e.padEnd( a.length - i, 0)).filter( e => Number(e) != 0).join(' + ')
}