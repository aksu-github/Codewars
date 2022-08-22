// // My Solution - Uses original array
// function squareDigits(num){
//   num = num.toString().split('');
  
//   for (index in num){
//     num[index] *= num[index];
//     //console.log(num[index]);
//   }
//   num = Number(num.join(''));
//   return num;
// }
// squareDigits(3212);
// squareDigits(2112);

 



// Best Solution - Uses map to build new array to return it
function squareDigits(num){
  // console.log(num);                                   //type num
  // console.log(('' + num));                            //type string
  // console.log(('' + num).split(''))                   //split
  // console.log(('' + num).split('').map(e => e*e))     //go thru each value and return a value
  return Number(('' + num).split('').map( e => e*e).join(''));
}
squareDigits(3212);
squareDigits(2112);