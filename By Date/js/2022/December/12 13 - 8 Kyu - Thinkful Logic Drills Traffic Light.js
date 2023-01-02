/*
Instruction:

*/

//  My Solution 

function updateLight(current) {
  
    switch ( current ){
        case 'green':
          return 'yellow';
          break;
        case 'yellow':
          return 'red';
          break;
        default:
          return 'green';       
    } 
}

//  Codewars

function updateLight(current) {
  
    return ({
      green: 'yellow',
      yellow: 'red',
      red: 'green'
    })[current];
  
  }