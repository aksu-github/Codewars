  function persistence(num) {
    // //MY SOLUTION - Was not able to have counter inside recursive function, but works individually
    // let count = 0;
    // let numArr = String(num).split("").map( num => Number(num));
    
    // if (numArr.length == 1){
    //   //console.table(`Array: ${numArr} \t\tLength: ${numArr.length} \tNext #: Done \tCount: ${count}\n\n\n\n`)
    //   return count;
    // } else {
    //   let nextNum = 1;
    //   for (let i = 0; i < numArr.length; i++){
    //     nextNum *= numArr[i];
    //   }
    //   count++;
    //   //console.table(`Array: ${numArr} \t\tLength: ${numArr.length} \tNext #: ${nextNum} \tCount: ${count}`)
    //   return persistence(nextNum)
    // }



    //BEST SOLUTION
    let count = 0;
    // console.log(`Length: ${num.toString().length}`)
    while(num.toString().length !== 1){
      count++;
      // console.log(num.toString().split(""));
      // console.log(typeof(num.toString().split("")))
      // console.log(num.toString().split("").reduce( (a, b) => a * b));
      // console.log(typeof(num.toString().split("").reduce( (a, b) => a * b)));    
      num = num.toString().split("").reduce( (a, b) => a * b);
    }
    // console.log(num.toString().split(""));
    // console.log(count);
    return count;
  }

persistence(39)
persistence(4)
persistence(999)

