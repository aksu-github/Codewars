/*
Instruction:

Implement a pseudo-encryption algorithm which given a 
string S and an integer N concatenates all the 
odd-indexed characters of 
S with all the even-indexed characters of S, 
this process should be repeated N times.

*/

//  My Solution 

// I suck at handling null
function encrypt(text, n) {
  if ( n <= 0 ){
   return text;
  }
  if ( text == null ){
   return null;
  }
  if ( n > 0 ){
    let textArr = text ? text.split('') : [];
    let arr1 = textArr.filter( (e,i) => i % 2 != 0 );
    let arr2 = textArr.filter( (e,i) => i % 2 == 0 );
    n--;
   
   return encrypt(arr1.concat(arr2).join(''), n)
  }
}

function decrypt(encryptedText, n) {
 if ( n <= 0 ){
   return encryptedText;
 }  
 if ( n > 0 ){
   let textArr = encryptedText ?  encryptedText.split('') :  [];
   let res = [];
   
   let c = Math.floor(encryptedText.split('').length /2);
   
   let arr1 = textArr.splice(0,c);
   let arr2 = textArr;

   for ( let i = 0; i < encryptedText.length; i++){
     if ( i % 2 == 0 ){
       
       res.push(arr2.shift())
     }
     if ( i % 2 != 0 ){
       res.push(arr1.shift())
     }
   }
   n--;

   return decrypt(res.join(''), n)

  }
}

//  Codewars - Solution Most Similar to Mine and Non-recursive

function encrypt(text, n) {
  if ( !text || n <= 0 ){
   return text;
  }
  while ( n--){
    let res = '';
    for ( let i = 1; i < text.length; i+=2){
      res +=text[i]
    }
    for ( let i = 0; i < text.length; i+=2){
      res +=text[i]
    }
    text = res;
  }
  return text;
}

function decrypt(encryptedText, n) {
 if ( !encryptedText || n <= 0 ){
   return encryptedText;
 }
 const res = new Array(encryptedText.length);  
 while( n-- ){
  let j = 0;
  for ( let i = 1; i < encryptedText.length; i +=2 ){
    res[i] = encryptedText[j++];
  }
  for ( let i = 0; i < encryptedText.length; i+= 2 ){
    res[i] = encryptedText[j++];
  }
  encryptedText = res.join('');
 }
 return encryptedText;
}