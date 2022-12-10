/*
Instruction:

Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . 
The input is the amount of USD as an integer, 
and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'


The conversion rate you should use is 6.75 CNY for every 1 USD. 


*/

//  My Solution 

function usdcny(usd) {
  return (Math.round(usd * 6.75 * 100) / 100).toFixed(2) + ' Chinese Yuan';
}