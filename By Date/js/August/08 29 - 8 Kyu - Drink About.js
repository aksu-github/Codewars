/*
Instruction:

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.

*/

//  My Solution 

function peopleWithAgeDrink(old) {
  let drinkData = {
    'kid':          'toddy',
    'teen':         'coke',
    'young adult':  'beer',
    'adult':        'whisky'
  }
  
  
  return  'drink ' + 
          ( old < 14 ? drinkData['kid']:
            old < 18 ? drinkData['teen']:
            old < 21 ? drinkData['young adult']:
            drinkData['adult'] );
};