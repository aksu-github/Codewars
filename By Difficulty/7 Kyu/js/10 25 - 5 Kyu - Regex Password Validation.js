/*
Instruction:

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

*/

//  My Solution

// assign your RegExp to REGEXP
// (?=(.*[!@#$%^&*()\-+.\s]){1,})

//  look aheads
/*

^               # start of input 
(?=.*?[A-Z])    # Lookahead to make sure there is at least one upper case letter
(?=.*?[a-z])    # Lookahead to make sure there is at least one lower case letter
(?=.*?[0-9])    # Lookahead to make sure there is at least one number
[A-Za-z0-9]{6,} # Make sure there are at least 6 characters of [A-Za-z0-9]
$               # end of input

*/
function validate(password) {
  const REGEXP = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})[a-zA-Z0-9]{6,}$/;
  return REGEXP.test(password);
}

//  Codewars

const REGEXP = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*\d){1,})[a-zA-Z\d]{6,}$/;