/*
Instruction:

Simple, remove the spaces from the string, then return the resultant string.

*/

//  My Solution - Best Solution

function noSpace(x){
    let regex = / /g;
    return x.replace(regex, '')
}

