/*
Instruction:

Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine. 

In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

*/

//  My Solution 

function DNAtoRNA(dna) {
  return dna ? DNAconvert(dna) : '';
}

function DNAconvert(str){
  return str.split('')
            .map( function(e){
              if ( e == 'T'){
                e = 'U';
              }
              return e;
            })
            .join('');
}

//  Codewars - Best Solution

function DNAtoRNA(dna){
  let regex = /T/g;
  let regexReplace = 'U';
  return dna.replace(regex, regexReplace);
}