/*
Instruction:

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

*/

//  My Solution

function toBinary(n){
    return Number(n.toString(2));
}

//  Codewars - Best Solution

//  '+' here is called a unary-plus
function toBinary(n){
    // same as 
    //  Number(n.toString(2))
    //  parseInt(n.toString(2))
    return +n.toString(2);
}