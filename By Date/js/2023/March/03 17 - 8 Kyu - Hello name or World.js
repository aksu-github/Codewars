/*
Instruction:

With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

*/

//  My Solution

function hello(name){
  return `Hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : `World`}!`;
}