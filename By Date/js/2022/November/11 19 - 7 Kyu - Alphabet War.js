/*
Instruction:

Write a function that accepts fight string 
consists of only small letters and return who wins the fight. 

When the left side wins return Left side wins!, 
when the right side wins return 
Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

*/

//  My Solution 

function alphabetWar(fight)
{
  const dataLeft = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  }
  const dataRight = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1    
  }

  let myArr = fight.replace(/[^wpbsmqdz]/g,'').split(''),
      left = 0,
      right = 0;
  
  for ( let i = 0; i < myArr.length; i++){
    dataLeft[myArr[i]] ? left+=dataLeft[myArr[i]] : right+=dataRight[myArr[i]];

  }
  
   return left > right ? `Left side wins!` :
          right == left ? `Let's fight again!` :
          'Right side wins!'
}

//  Codewars 

function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}