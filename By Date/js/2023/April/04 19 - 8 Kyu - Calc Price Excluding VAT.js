/*
Instruction:

*/

//  My Solution

function excludingVatPrice(price){
    if ( price === null){
      return -1;
    }
    return price >= 0 ? Math.round((price / 1.15) * 100) / 100 : -1;
  }

//  Codewars - Best Practice

function exlcudingVatPrice(price){
    return p === null ? -1 : +(price / 1.15).toFixed(2);
}