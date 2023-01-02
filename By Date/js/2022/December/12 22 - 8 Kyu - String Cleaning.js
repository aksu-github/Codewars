/*
Instruction:

Your program will take in a string and 
clean out all numeric characters, and 
return a string with spacing and special 
characters ~#$%^&!@*():;"'.,? all intact.

*/

//  My Solution 

function stringClean(s){
  let regex = /[0-9]/g;
  return s.replace(regex,'');
}