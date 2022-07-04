/*
Instruction:

Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

//  My Solution

// function removeEveryOther(arr){
//     for ( let i = 0; i <= arr.length; i++){
//         if ( i % 2 == 1)  {
//             delete arr[i]
//         }
//     }
//     return arr.filter(e => e != null)
// }


// Codewars - Best Solution

function removeEveryOther(arr){
    return arr.filter(function(e,i){
        return i % 2 === 0;
    })
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));