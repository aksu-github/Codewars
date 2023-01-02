/*
Instruction:

Character recognition software is widely used to digitise printed texts. 
Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), 
are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/

//  My Solution 

//  Muscled my way thru this one in the most braindead way possible.
//  Tried using some regex, couldn't make capture groups correctly and/or replace correctly.
function correct(string){
  for ( let i = 0; i < string.length; i++){
    string.includes('5') ? string = string.replace('5','S') : null;
    string.includes('0') ? string = string.replace('0','O') : null;
    string.includes('1') ? string = string.replace('1','I') : null;
  }
  
  return string;
}

//  Codewars - Best Solution

const corrections = {
  '5': 'S',
  '0': 'O',
  '1': 'I',
};

function correct(string){
  return string.replace(/[501]/g, character => corrections[character]);
}

//  Codewars - Best Solution

function correct(string) {
  return string.replace(/0/g, "O")
               .replace(/5/g, "S")
               .replace(/1/g, "I");
}