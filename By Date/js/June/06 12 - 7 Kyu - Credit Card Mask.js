/*
Instruction:

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/

//  My Solution 

// return masked string
function maskify(cc) {
  cc = cc.split('').map((e,i) => i < cc.length-4 ?  '#': e).join('')
  return cc
}
maskify('4556364607935616')
maskify('11111')
maskify('1')