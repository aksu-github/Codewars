/*
Instruction:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:

Input:
> 6

Output:
0+1+2+3+4+5+6 = 21

Input:
> -15

Output:
-15<0

Input:
> 0

Output:
0=0

*/

//  My Solution 

//  Did not get this one. It wasn't the logic that I did not get. It was how the code was written.
//  It feels like a class or constructor, but the syntax is very archaic.






//  Codewars 

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let sum = 0;
    let res = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (let i = 0; i < count; i++) {
        sum += i;
        res += i + "+";
    };
    sum += count;
    res += count + " = " + sum;
    return res;
    };
  };

  return SequenceSum;

})();