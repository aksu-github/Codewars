/*
Instruction:

You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k 
consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

*/

//  Codewars 

function longestConsec(strArr, k) {
  //  screen for invalid conditions
  if ( strArr.length == 0 || k > strArr.length || k <= 0 ){
    return '';
  } else {
    //  create myObj to store data as:
    //    'concatenated': concatenated_length
    //
    //  search thru for longest concatenated_length
    let myObj = {};
    let longest;
    for ( let i = 0; i < strArr.length-k+1; i++){
      myObj[`${strArr.slice(i,i+k).join('')}`] = strArr.slice(i,i+k).join('').length
    }
    longest = Math.max(...Object.values(myObj));
    for ( let keys in myObj){
      if ( myObj[keys] == longest ){
        return keys;
      }
    }
  }
}

longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)

//  Codewars - Best Solution

function longestConsec(strarr, k) {
  let longest = "";
  for( let i=0; k>0 && i<=strarr.length-k; i++){
    let tempArray = strarr.slice(i,i+k);
    let tempStr = tempArray.join("");
    if( tempStr.length > longest.length ){
      longest = tempStr;
    }
  }
  return longest;
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}