/*
Instruction:

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.

Note: input will never be an empty string

*/

//  My Solution - Best Solution

function fakeBin(x){
    //console.log(x.split('').map( e => e<5 ? '0' : '1').join(''))
    return x.split('').map( e => e<5 ? '0' : '1').join('')
}

fakeBin('45385593107843568')