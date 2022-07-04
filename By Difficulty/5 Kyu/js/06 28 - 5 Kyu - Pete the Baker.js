/*
Instruction:

Write a function cakes(), which takes the recipe (object) 
and the available ingredients (also an object) and 
returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts 
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 

// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

*/

//  My Solution

// function cakes(recipe, available) {
//   const req   = Object.keys(recipe);
//   let mats    = Object.keys(available);
//   let qty     = [];

//   const isSubset = (matsArr, reqArr) => reqArr.every( e => matsArr.includes(e) );

//   if ( !isSubset(mats,req) )  return false;

//   for ( keysA in available){
//     for ( keysR in recipe){
//       if ( keysA == keysR)  qty.push(Math.floor(available[keysA]/recipe[keysR]));
//     }
//   }

//   return Math.min(...qty)
// }

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
//cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

//  Codewars - Best Solution

function cakes(needs, has) {
  console.log(Object.keys(needs).map( e => Math.floor( has[e] / needs[e] || 0)))
  Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )
}
