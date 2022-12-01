/*
Instruction:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

//  My Solution 

function domainName(url){
  let regex1 = /(http:\/\/|https:\/\/|www.)/g;
  let regex2 = /(\..+)$/;
  
  url = url.replace(regex1,'');
  
  return url.replace(regex2,''); 
}

//  Codewars - Most Similar

function domainName(url){
  let regex = /.*\/\/|www\.|\..*/g;

  return url.replace(regex, '');
}