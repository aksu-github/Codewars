/*
Instruction:

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4 because:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)

Multiply

the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with the number 178:

8x1 + 7x10 + 1x9 = 87

and again with 87:

7x1 + 8x10 = 87

*/

//  Codewars

function thirt(n) {
  const nums = [1,10,9,12,3,4]
  var sum = (''+n).split('').reverse().reduce((sum,a,b) => sum + a * nums[b%nums.length], 0)
  return sum === n ? n : thirt(sum)
}