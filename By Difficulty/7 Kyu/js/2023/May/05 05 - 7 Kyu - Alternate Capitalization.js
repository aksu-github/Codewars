/*
Instruction:

*/

//  My Solution 

function capitalize(s){
  let x = '',
      y = '';
  
  for ( let i = 0; i < s.length; i++){
    if ( i % 2 == 0 ){
      x+=s[i].toUpperCase();
      y+=s[i];
    } else {
      x+=s[i];
      y+=s[i].toUpperCase();
    }
  }
  return [x,y];
};

//  Codewars

function capitalize(s){
  return [0,1].map( e => 
    [...e].map( (c,i) => 
    i%2===e ? c.toUpperCase():c ).join('') );
};
