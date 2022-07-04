// // MY Solution
// function isPangram(string){
//   //remove all spaces, numbers, and punctuations
//   //make all lowercase
//   //remove duplicate letters
//   //check if array length is 26

//   arr = string.toLowerCase().split('').join('').replace(/[0-9\.\'\, ]/g,"").split('');
//   //console.log(arr)

//   //Set is a special data structure introduced in ES6 that stores a collection of unique values. 
//   //Since each value in a Set has to be unique, passing any duplicate item will be removed automatically

//   //arr = Array.from(new Set(arr));
//   //console.log(arr)
  
//   if (Array.from(new Set(arr)).length < 26)
//     return false;
//   if (Array.from(new Set(arr)).length == 26)
//     return true;
// }

//Codewars Solution
function isPangram(string){
  console.table('abcdefghijklmnopqrstuvwxyz'.split(''))
  console.log(string.toLowerCase())
  console.log('abcdefghijklmnopqrstuvwxyz'.split('').every( e => string.toLowerCase().includes(e)));
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
isPangram("The quick brown fox jumps over the lazy', dog.")