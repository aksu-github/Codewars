/*
Instruction:

Let's play! You have to return which player won! In case of a draw return Draw!.

*/

//  My Solution

//  My overcomplicated solution to not use if...else explicitly
const rps = (p1, p2) => {
  const data = {
    'rock':     [0,1,-1],
    'paper':    [-1,0,1],
    'scissors': [1,-1,0] 
  };
  let winnerData = data[p1].map( (e,i) => e + data[p2][i] )
//   console.log(`${p1}   ${p2}`)
//   console.log(winnerData)
  
//   console.log(winnerData.indexOf(Math.max(0,...winnerData)))
//   console.log(['rock','paper','scissors'][winnerData.indexOf(Math.max(0,...winnerData))])
  
  return Math.max(0,...winnerData) == 2 ? `Draw!` :
          p1 == ['rock','paper','scissors'][winnerData.indexOf(Math.max(0,...winnerData))] ? `Player 1 won!` :
          `Player 2 won!`;
};

//  Codewars - Best Solution

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};