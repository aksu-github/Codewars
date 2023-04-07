/*
Instruction:

Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

*/

//  My Solution

function strong(n) {
  function factorial(x){
    if (x==0) {
      return 1;
    }
   return x * factorial(x-1);
  }
  return n.toString().split('').reduce( (a,b) => a + factorial(+b), 0) == n ? "STRONG!!!!" : "Not Strong !!" ;
}