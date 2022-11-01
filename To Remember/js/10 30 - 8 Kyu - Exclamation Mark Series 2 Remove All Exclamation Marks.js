/*
Instruction:

Remove all exclamation marks from the end of sentence.

*/

//  My Solution

function remove (string) { 
  while(string.endsWith('!')){
    let index = string.lastIndexOf('!');
    string = string.substring(0,index);
  }
   return string;
 }

// Codewars - Most Similar to Mine

function remove(s)
{
    while(s && s.slice(-1) == "!") { 
        s = s.slice(0,-1) 
    }
    return s;
}

//  Codewars - Best Solution

function remove(string)
{
  let regex = /!+$/;
  return string.replace(regex, '');
}