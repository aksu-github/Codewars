/*
Instruction:

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

*/

//  Codewars

function kebabize(str) {
    return str.replace(/[^a-z]/ig, '')
              .replace(/^[A-Z]/, e => e.toLowerCase())
              .replace(/[A-Z]/g, e => `-${e.toLowerCase()}`);
}