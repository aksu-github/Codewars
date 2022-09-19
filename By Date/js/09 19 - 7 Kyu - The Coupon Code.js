/*
Instruction:

Write a function called checkCoupon which 
verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".

*/

//  My Solution 

//  Took wayyyyyyyyyyyyyyyyyyyyyyyyy too long
//  Went full stupid creating custom objects to associate months by string to month by number
//  Decided to not go down further that route and read up on MDN

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let date1 = new Date(currentDate)
  let date2 = new Date(expirationDate)

  return enteredCode === correctCode && date1 <= date2;
}



//  Codewars - Best Solution

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}
