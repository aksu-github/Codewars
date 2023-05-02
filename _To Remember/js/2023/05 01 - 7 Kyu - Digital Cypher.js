/*
Instruction:

cypher:

 a  b  c  d  e  f  g  h  i  j  k  l  m n  o  p  q  r  s  t  u  v  w  x  y  z
 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26

 then add 1939
 so,

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21

*/

//  My Solution 

function encode(str, n) {
  const key = String(n)
  return Array.from( str, (e, i) => e.charCodeAt(0) - 96 + Number(key[i % key.length]) )
}