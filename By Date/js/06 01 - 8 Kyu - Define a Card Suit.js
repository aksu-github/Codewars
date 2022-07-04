/*
Instruction:

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

//  My Solution -  Did not get correct

// function defineSuit(card) {
//   let suit = card.split('').at(1).toString() //there was an issue here that prevent correctness
//   //console.log(suit)
  
//   switch ( suit ) {
//     case '♣':
//       return 'clubs';
//       break;
//     case '♦':
//       return 'diamonds';
//       break;
//     case '♥':
//       return 'hearts';
//       break;
//     case '♠':
//       return 'spades';
//       break;
//     default:
//       console.log('Cannot find')
//   }
// }

//  Codewars - Best Solution

function defineSuit(card) {
  const suit = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return suit[card.charAt(card.length - 1)]
}

