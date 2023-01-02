/*
Instruction:

Complete the function that receives as input a string, 
and produces outputs according to the following table:

Input	              Output

"Jabroni"	          "Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	      "Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	      "Your tax dollars"
"Rapper"	          "Cristal"
anything else	      "Beer"

Note: anything else is the default case: if the input to the 
function is not any of the values in the table, then the return value should be "Beer".

*/

//  My Solution 

function getDrinkByProfession(param){
  const myData = {
    'jabroni': 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    'programmer': 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    'politician': 'Your tax dollars',
    'rapper': 'Cristal',
  }
  param = param.toLowerCase();
//   if ( param in myData ){
//     return myData[param];
//   } else {
//     return 'Beer';
//   }
  return param in myData ? myData[param] : 'Beer'
}