// // My Solution - I feel like im just mathing my way thru

// function orderWeight(str) {
//   //split(' ') to obtain array of strings
//   //map()? to transform array in numbers and add digits of elements

//   //for loop to transform one array based on another array's value
//   //map() may be possible? <----DID NOT DO IT THIS WAY

//   if (str.length === 0){
//     return '';
//   }
//   if (str.length > 0){
//   let arrStr = str.split(' ').sort();
//   //console.log(arrStr)
  
//   let arrNum = arrStr.map((e) => e.split('').map(e => Number(e)).reduce((sum, e) => sum + e));
//   //console.log(arrNum)

//   let weightedCoeff = Array.from(new Set(arrNum)).sort((a,b) => a - b);
//   //console.log(weightedCoeff)

//   let arrXform = [];

//   for ( let i = 0; i < weightedCoeff.length ; i++){
//     //console.log(weightedCoeff[i])
//     for ( let j = 0; j < arrNum.length; j++){
//       if ( arrNum[j] === weightedCoeff[i] ){
//         arrXform.push(arrStr[j]);
//       }
//     }
//   }
//   //console.log(arrXform.join(' '))
//   return arrXform.join(' ') 
//   }
// }

// //Codewars - Best Solution
function orderWeight(strng) {
  //standard arrow function
  //let fxnName = inputs => expression

  /*

  so .split() makes a string --> so sumDigits can use split --> but .reduce() can take anything, 
  but sum is a NUMBBER and e is a string so that is why sum+ (+e is used)

  in my code, I converted the string values after .split() to numbers using map in order to use .reduce() as (sum + e)
  because both inputs are number types; this makes .split() before .reduce() not possible.

            const ssumDigits = (str) => str.split('').reduce((sum,e) => (sum+ e),0);

  That is why I had to create a new array to handle this issue.

  TRY THIS TO RECALL:
    console.log(1 + "hi")
    console.log(1 + (+'1'))
  */
  const sumDigits = (str) => str.split('').reduce((sum,e) => (sum+ (+e)),0);

  //compare each value
  //if values are equal ? do string compare : normal compare
  function comp(a,b){
    // console.log(`sumDigits: ${sumDigits(a)} <> ${sumDigits(b)}`)
    // console.log(`ssumDigits: ${ssumDigits(a)} <> ${ssumDigits(b)}`)
    return sumDigits(a) === sumDigits(b) ? a.localeCompare(b) : sumDigits(a) - sumDigits(b);
  };
  //console.log(`${strng.split(' ')}`)
  //console.log(`${strng.split(' ').sort(comp)}`)

  //compareFunction is supplied to custom sort
  return strng.split(' ').sort(comp).join(' ');
 }
orderWeight("56 65 74 100 99 68 86 180 90");
//orderWeight('103 123 2000 4444 99')
// orderWeight('')

