/*
Instruction:

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------

or example, to type a letter "R" you would press the 
7 key three times (as the screen display for the current character cycles through P->Q->R->S->7).

*/


//  Codewars

function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;

      phrase.forEach( x => {
        //  By making an array thru [0], key is returned without '' around.
        //  So if phrase = 'LOL'
        //  key = JKL5 instead of key = 'JKL5'
        var key = chunks.filter(e => e.indexOf(x) > -1)[0];
        total += key.indexOf(x) + 1;
      });
      return total;    
}

