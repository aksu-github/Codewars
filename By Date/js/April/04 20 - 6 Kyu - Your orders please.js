// // My Solution (such a dumb way of doing it, but it gets it done)
// function order(words){
//   //take input string and split it up based spaces
//   //should become separate elements in 1 array
//   //switch loop
//   //  0: return
//   //  default: find numbers

//   words = words.split(' ')
//   //console.log(words)
//   let wordsNew = [];

//   switch (words.length){
//     case 0:
//       return words;
//       break;
//     default:
//       for (let i = 0; i < words.length; i++ ){
//         //console.log(words.find(e => e.includes(i+1)))
//         wordsNew[i] = words.find(e => e.includes(i+1))
//       }
//       return wordsNew.join(' ')
//   }
// }

//Codewars Best Solution
function order(words){
  console.log(words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)));
  console.log(words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' '));
  return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
}    

order("is2 Thi1s T4est 3a");
order('')