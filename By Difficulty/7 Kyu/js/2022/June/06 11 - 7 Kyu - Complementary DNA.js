/*
Instruction:

In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/

//  My Solution 

//  I know I can use replace, but that defeats the purpose
// function DNAStrand(dna){
//   dna = dna.split('').map( e => e =='A' ? 'T': e=='T' ? 'A': e);
//   dna = dna.map( e => e =='G' ? 'C': e=='C' ? 'G': e).join('')

//   return dna;
// }


//  Codewars - Best Solution w/o Using Replace()
let pairs = {
  'A':'T',
  'T':'A',
  'C':'G',
  'G':'C'
};

function DNAStrand(dna){
  return dna.split('').map(e => pairs[e]).join('');
}

console.log(pairs['A'])

DNAStrand("AAAA")
DNAStrand("ATTGC")