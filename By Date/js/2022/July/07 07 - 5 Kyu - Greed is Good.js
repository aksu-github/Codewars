/*
Instruction:

Greed is a dice game played with five six-sided dice. 
Your mission, should you choose to accept it, 
is to score a throw according to these rules. 
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. 
For example, a given "5" can only count as part of a triplet 
(contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

*/

//  My Solution - Did not Get

// function score( dice ) {
//   const objPoints = {
//     '111':1000,
//     '666':600,
//     '555':500,
//     '444':400,
//     '333':300,
//     '222':200,
//     '1':100,
//     '5':50
//   }
//   let objDice = {};
//   let point = 0;

//   dice.forEach( e => objDice[e] = (objDice[e] || 0) + 1)
//   console.log(objDice)
//   for ( keys in objDice){
//     if (objDice[keys] == 2) {
//       if (keys == 2) delete objDice[keys];
//       if (keys == 3) delete objDice[keys];
//       if (keys == 4) delete objDice[keys];
//       if (keys == 6) delete objDice[keys];
//     }
//     if (objDice[keys] == 1){
//       if (keys == 2) delete objDice[keys];
//       if (keys == 3) delete objDice[keys];
//       if (keys == 4) delete objDice[keys];
//       if (keys == 6) delete objDice[keys];
//     }
//   }
//   console.log(objDice)
//   for ( keys in objDice ){
//     if ( objDice[keys] >= 3) {
//       if ( keys > 1){
//         objDice[keys] = objDice[keys] -3;
//         point += Number(keys.padEnd(3,0));
//       } else {
//         objDice[keys] = objDice[keys] -3;
//         point += Number(keys.padEnd(4,0));
//       }
//     }
//     if ( objDice[keys] == 1){
//       if ( keys == 1){
//         objDice[keys] = objDice[keys] -1;
//         point += Number(keys.padEnd(3,0));
//       } 
//       if ( keys == 5) {
//         objDice[keys] = objDice[keys] -1;
//         point += Number(keys.padEnd(2,0));
//       }
//     }
//   }
//   console.log(objDice)
//   console.log(point)
// }

// score([2, 3, 4, 6, 2])
score ( [5,1,3,4,1])

function score( dice ) {
  let dc = [0,0,0,0,0,0];
  let tdr = [1000,200,300,400,500,600];
  let sdr = [100,0,0,0,50,0];

  dice.forEach(e => dc[e-1]++ );
  //console.log(dc)
  return dc.reduce(function(a,b,i){ 
    return a + (b >= 3? tdr[i] : 0) + sdr[i]*(b % 3);
  },0);
}