/*
Instruction:

Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

//  My Solution

// function humanReadable (seconds) {
//   let hh = Math.floor( seconds / 3600 );
//   seconds -= (hh * 3600);
  
//   let mm = Math.floor( seconds / 60 );
//   seconds -= (mm * 60);

  
//   if (hh < 10)  hh = '0'+hh;
//   if (mm < 10)  mm = '0'+mm;
//   if (seconds < 10) seconds = '0'+seconds;

//   return `${hh}:${mm}:${seconds}`
// }

humanReadable(59)
humanReadable(90)
humanReadable(3600)
humanReadable(45296)
humanReadable(86399)
humanReadable(86400)

//  Codewars - Best Solution

function humanReadable ( seconds ) {
  let pad   = function(x){
    return x < 10 ?  '0'+x : x;
  }

  let hour  = pad( parseInt( seconds / 3600 ) ),
      min   = pad( parseInt( seconds / 60 ) % 60 ),
      sec   = pad( seconds % 60 );

  //console.log(`${hour}:${min}:${sec}`)
  return `${hour}:${min}:${sec}`
}