/*
Instruction:

Initial principal 'P'.
The sum is kept for 'Y' years in the bank where 
interest 'I' is paid yearly. 
After paying taxes 'T' for the year the new sum is re-invested.


Note to Tax: not the invested principal is taxed, but only the year's accrued interest


Your task is to complete the method provided 
and return the number of years 'Y' as a whole in order 
for Mr. Scrooge to get the desired sum.


*/

//  My Solution 

function calculateYears(principal, interest, tax, desired) {
  let c = 0;
  while ( principal < desired ){
    let rawPrincipal = principal * ( 1 + interest );
    let newPrincipal = rawPrincipal - (rawPrincipal - principal) * tax;
    principal = newPrincipal;
    c++;
  }
  return c;
}

//  Codewars - Best Solution

function calculateYears(principal, interest, tax, desired) {
  let c = 0;
  while ( principal < desired ){
    principal += principal * interest * ( 1 - tax );
    c++;
  }
  return c;
}