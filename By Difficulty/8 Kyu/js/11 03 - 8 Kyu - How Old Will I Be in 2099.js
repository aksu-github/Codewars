/*
Instruction:

Your task is to write a function that takes two parameters: 
the year of birth and the year to count years in relation to. 
As Philip is getting more curious every day he may soon want 
to know how many years it was until he would be born, 
so your function needs to work with both dates in the future and in the past.

*/

//  My Solution 

function  calculateAge(birth, date) {
  let age = date - birth;
  
  return age > 1 ? `You are ${age} years old.` :
        age == 1 ? `You are ${age} year old.` :
        age == 0 ? `You were born this very year!` :
        age == -1 ? `You will be born in ${Math.abs(age)} year.` :
        `You will be born in ${Math.abs(age)} years.`

}

