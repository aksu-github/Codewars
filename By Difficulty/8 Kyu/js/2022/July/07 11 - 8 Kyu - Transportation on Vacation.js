/*
Instruction:


Every day you rent the car costs $40. If you rent the car for 7 or more days, 
you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

*/

//  My Solution 

function rentalCarCost(d) {
    let discount = d > 6 ? 50 : d > 2 ? 20 : 0;

    return d*40 - discount;

  }