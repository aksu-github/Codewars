// CODEWARS Kata 6 - Num to Binary

function addBinary(a,b) {
    // let sum = a + b; //number type

    // let binary = ( sum % 2 ).toString(); //string type

    // do{
    //     sum = parseInt( sum / 2, 10 );
    //     binary = (sum % 2) + binary;      
    // }while ( sum > 1 )

    // console.table(binary)
    return console.table((a+b).toString(2));
    
  }

  addBinary(1,1);
  addBinary(5,9);



