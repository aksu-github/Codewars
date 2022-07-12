/*
Instruction:

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:



*/

//  My Solution

snail = function(myArr) {

    let order = [];

    while (myArr.length != 0 && myArr[0] != ''){
        // Push Row 1 from Left to Right then delete it
        for ( let i = 0; i < myArr.length; i++){
            order.push(myArr[0][i])
        }
        myArr.shift(myArr[0])
        
        // Push Col N from Top to Bot then delete it
        for ( let i = 0; i < myArr.length; i++){
            order.push(myArr[i][myArr.length])
            myArr[i].splice(-1)
        }
        
        // Push Row N from Right to Left then delete it
        for ( let i = myArr.length - 1; i >= 0 ; i--){
            order.push(myArr[myArr.length-1][i])
        }
        myArr.pop(myArr[myArr.length-1])

        // Push Col 1 from Bot to Top then delete it
        for ( let i = myArr.length - 1; i >= 0 ; i--){
            order.push(myArr[i][0])
            myArr[i].splice(0,1)
        }     
    }

    return order;
}

//snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
snail([[]])