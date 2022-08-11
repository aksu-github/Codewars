/*
Instruction:



*/

//  My Solution 
let COMPANY = [
  {ID: 1, NAME: 'Adobe', EMPLOYEES: 28085},
  {ID: 2, NAME: 'Flipkart', EMPLOYEES: 35543},
  {ID: 3, NAME: 'Amazon', EMPLOYEES: 1089},
  {ID: 4, NAME: 'Paytm', EMPLOYEES: 9982},
  {ID: 5, NAME: 'BookMyShow', EMPLOYEES: 5589},
  {ID: 6, NAME: 'ORacle', EMPLOYEES: 4003},
  {ID: 7, NAME: 'NIIT', EMPLOYEES: 57782},
  {ID: 8, NAME: 'Samsung', EMPLOYEES: 2000},
  {ID: 9, NAME: 'TCS', EMPLOYEES: 10046},
  {ID: 10, NAME: 'Wipro', EMPLOYEES: 3500}
]

function co10000(arr) {
  for ( let i = 0; i < COMPANY.length; i++){
    COMPANY[i].EMPLOYEES > 10000 ? console.log(COMPANY[i].ID) : null;
  }
}

co10000(COMPANY)