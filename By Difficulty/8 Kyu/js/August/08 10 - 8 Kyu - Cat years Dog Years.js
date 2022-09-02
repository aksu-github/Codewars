/*
Instruction:

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1

humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that


*/

//  My Solution 

function humanYearsCatYearsDogYears(humanYears){
  let catData = [15,9,4];
  let dogData = [15,9,5];

  let index   = humanYears  - 1 % 3;
  
  if ( index < 3){
    return [
            humanYears,
            catData.slice(0,index+1).reduce( (a,b) => a + b, 0),
            dogData.slice(0,index+1).reduce( (a,b) => a + b, 0)
          ]
  } else {
    return [
            humanYears,
            catData.slice(0,index+1).reduce( (a,b) => a + b, (humanYears - 3) * catData[2]),
            dogData.slice(0,index+1).reduce( (a,b) => a + b, (humanYears - 3) * dogData[2])
          ]    
  }
}

//  Codewars - Best Solution

function humanYearsCatYearsDogYears(humanYears){
  let catData = [15,9,4];
  let dogData = [15,9,5];

  if ( humanYears == 1 ) return [1,15,15];
  if ( humanYears == 2 ) return [2,24,24];

  return [humanYears, (humanYears - 2) * catData[2] + 24, (humanYears - 2) * dogData[2] + 24]
}
