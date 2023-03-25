/*
Instruction:

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid

*/

//  My Solution

function barTriang(p1, p2, p3){
    let x = (p1[0] + p2[0] + p3[0])/3,
        y = (p1[1] + p2[1] + p3[1])/3;
    return [+x.toFixed(4),+y.toFixed(4)]
  }