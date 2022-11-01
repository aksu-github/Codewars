// // My Solution -  My Dumb Way of doing it

// // complete the solution by transforming the 
// // string roman numeral into an integer

// /*

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in 
// descending order.
// */

// function solution(roman) {
//   //split
//   //use switch statement
//   //if numbers are sorted from largest to smallest --> add
//   //if there is small number b4 larger # --> take larger number - smaller #

//   let splitRoman = roman.split('');

//   for ( let i = 0; i < splitRoman.length; i++){
//     switch(splitRoman[i]){
//       case 'I':
//         splitRoman[i] = 1;
//         break;
//       case 'V':
//         splitRoman[i] = 5;
//         break;
//       case 'X':
//         splitRoman[i] = 10;
//         break;
//       case 'L':
//         splitRoman[i] = 50;
//         break;
//       case 'C':
//         splitRoman[i] = 100;
//         break;
//       case 'D':
//         splitRoman[i] = 500;
//         break;
//       case 'M':
//         splitRoman[i] = 1000;
//         break;
//     }
//   }

//   //console.log(splitRoman)
	
//   splitRoman.push(0);
//   let num = 0; 

//   for (let i = 0; i <= splitRoman.length; i++){
//     if (splitRoman[i] >= splitRoman[i+1]){
//       num+=splitRoman[i];
//     }
//     if (splitRoman[i] < splitRoman[i+1]){
//       num+=(splitRoman[i+1]-splitRoman[i]);
//       i++;
//     }
//   }

//   //console.log(num)
//   return num;
// }

//Codewars - Best Solution
function solution(roman)
{
  let data = {
    M: 1000, 
    D: 500, 
    C: 100, 
    L: 50, 
    X: 10, 
    V: 5, 
    I: 1
  };

  let numbers = roman.split('');
  let sum = 0;

  for(let i = 0; i < numbers.length; i++)
  {
    if(data[numbers[i]] < data[numbers[i+1]])
    {
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else
    {
      sum += data[numbers[i]];
    }
  }
  
  return sum;
}
solution('MMVIII')
solution('IV')
solution('IX')
solution('CXLIII') // 100 10 50 1 1 1