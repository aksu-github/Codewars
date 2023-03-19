/*
Instruction:

Find the length of the longest substring in the given string s that is the same in reverse.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

*/

//  My Solution

var longestPalindrome = function(s) {
  let longest = '';
  const findLongestPalindrome = (str, i, j) => {
      while(i >= 0 && j < str.length && str[i] === str[j]) {
          i -= 1;
          j += 1;
      }
      // slice the qualified substring from the second last iteration
      return str.slice(i + 1, j);
  }
  for (let i = 0; i < s.length; i++) {
      // palindrome can center around 1 or 2 letters
      const current1 = findLongestPalindrome(s, i, i);
      const current2 = findLongestPalindrome(s, i, i + 1);
      const longerPalindrome = 
            current1.length > current2.length ? current1 : current2;
      if (longerPalindrome.length > longest.length) {
          longest = longerPalindrome;
      } 
  }
  return longest.length;
};

//  Codewars

var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}