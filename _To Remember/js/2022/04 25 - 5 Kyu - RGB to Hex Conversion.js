// // My Solution - MATH'd my way through

// // Notes - Background Info - Hex to RGB conversion
// // 
// // 0-9
// // a-f == 10-15
// //
// // #  fe  d3  17    <-- HEX Pair
// //    R , G , B     <-- RGB values
// //
// // Multiply 1st digits of each pair by 16
// // Multiply 2nd digits of each pair by 1
// // Add both values
// // Repeat individually for each pair
// //
// // So # fe d3 17,
// // f = 15 --> 15 x 16  = 240
// // e = 14 --> 14 x 1   = 14
// //        --> 240 + 14 = 254

// function rgb(r, g, b){
//   //console.log(`${r.toString(16)}${g.toString(16)}${b.toString(16)}`)
//   function toHex(n){
//     if (n < 0)
//       n = 0;
//     if (n > 255)
//       n = 255;
//     let hex = n.toString(16);
//     return hex.length == 1 ? `0${hex.toUpperCase()}` : hex.toUpperCase();
//   }
//   //console.log(`${toHex(r)}${toHex(g)}${toHex(b)}`)
//   return `${toHex(r)}${toHex(g)}${toHex(b)}`
// }

//Codewars Best Solution

function toHex(d) {
  if ( d < 0 ) return "00";
  if ( d > 255 ) return "FF";
  //This following statement handles when there is only 3 digits with slice(-2)
  //
  //If there is 1 digit after toString(16), "00" slice(-2) is still "00"
  //And if correct digits after toString(16) becomes "0XY", so slice(-2) is used to correct it.
  return  ("0"+(d.toString(16))).slice(-2).toUpperCase();
}

function rgb(r, g, b){
  //console.log(`${toHex(r)}${toHex(g)}${toHex(b)}`);
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}


//rgb(173,255,47)
//rgb(0,0,0)
rgb(300,255,255)