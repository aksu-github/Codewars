/*
Instruction:

In the board game, each turn has six steps that must happen in this order: 
roll the dice, 
move, 
combat, 
get coins, 
buy more health, 
and print status.

*/

//  My Solution 

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

//  Codewars

let health = 100,
    position = 0,
    coins = 0

function main () {
  const actions = [rollDice,move,combat,getCoins,buyHealth,printStatus];
  actions.forEach(e => e());
}