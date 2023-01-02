/*
Instruction:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

//  My Solution - Best Solution

function sumTwoSmallestNumbers(numbers) {
    //sort() from small to big
    //splice array to only contain arr[0] and arr[1]
    //reduce()
    return numbers.sort((a,b) => a > b ? 1 : -1).splice(0,2).reduce((sum,cur) => sum+cur, 0)
}

sumTwoSmallestNumbers([15, 28, 4, 2, 43])
sumTwoSmallestNumbers([3, 87, 45, 12, 7])
sumTwoSmallestNumbers([23, 71, 33, 82, 1])