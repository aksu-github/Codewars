/*
Instruction:

The Morse code encodes every character as a sequence of "dots" and "dashes". 
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. 
The Morse code is case-insensitive, traditionally capital letters are used. 
When the message is written in Morse code, 
a single space is used to separate the character codes and 3 spaces are used to separate words. 
For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, 
there are some special service codes, 
the most notorious of those is the international distress signal SOS (that was first issued by Titanic), 
that is coded as ···−−−···. 
These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

*/

//  My Solution 

function decodeMorse(morseCode){
  // const MORSE_CODE = {
  //   '.-':   'A',
  //   '-...': 'B',
  //   '-.-.': 'C',
  //   '-..':  'D',
  //   '.':    'E',
  //   '..-.': 'F',
  //   '--.':  'G',
  //   '....': 'H',
  //   '..':   'I',
  //   '.---': 'J',
  //   '-.-':  'K',
  //   '.-..': 'L',
  //   '--':   'M',
  //   '-.':   'N',
  //   '---':  'O',
  //   '.--.': 'P',
  //   '--.-': 'Q',
  //   '.-.':  'R',
  //   '...':  'S',
  //   '-':    'T',
  //   '..-':  'U',
  //   '...-': 'V',
  //   '.--':  'W',
  //   '-..-': 'X',
  //   '-.--': 'Y',
  //   '--..': 'Z',
  //   '...---...': 'SOS',
  //   '-.-.--': '!',
  //   '.-.-.-': '.'
  // }
  
  let morseArr  =  morseCode.split(' ')
                            .map(e => MORSE_CODE[e])                    

  //  map 'undefined' into ' '
  for ( let i = 0; i < morseArr.length; i++){
    if ( morseArr[i] == undefined){
      morseArr[i] = ' ';
    }
  }
  
  //  replace more than 1+ space with 1 space
  //  trim() to remove spaces before and after
  morseArr = morseArr.join('').replace(/\s+/g,' ').trim();
  return morseArr;
}

decodeMorse('.... . -.--   .--- ..- -.. .')

//  Codewars - Best Solution

function decodeMorse(morseCode){
  
  //  remove spaces before and after
  //  split by 2 and 1 space'd
  //  find values of morseCode in MORSE_CODE, or ' ' if unable to
  //  join()
  let morseStr  =  morseCode.trim()
                            .split(/  | /)
                            .map( e => MORSE_CODE[e] || ' ')
                            .join('')
  return morseArr;
}

