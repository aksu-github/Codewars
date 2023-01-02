/*
Instruction:

Think of a way to store the languages as a database (eg an object). 
The languages are listed below so you can copy and paste!

Write a 'welcome' function that takes a parameter 'language' (always a string), 
and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, or in the event of an invalid input.

The Database

english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'

*/

//  My Solution 

function greet(language) {
  let obj_Welcome = {
    english:    'Welcome',
    czech:      'Vitejte',
    danish:     'Velkomst',
    dutch:      'Welkom',
    estonian:   'Tere tulemast',
    finnish:    'Tervetuloa',
    flemish:    'Welgekomen',
    french:     'Bienvenue',
    german:     'Willkommen',
    irish:      'Failte',
    italian:    'Benvenuto',
    latvian:    'Gaidits',
    lithuanian: 'Laukiamas',
    polish:     'Witamy',
    spanish:    'Bienvenido',
    swedish:    'Valkommen',
    welsh:      'Croeso'
  }

  return language in obj_Welcome ? obj_Welcome[language] : `Welcome`;
}

//  Codewars - Best Solution

function greet(language) {
  let obj_Welcome = {
    english:    'Welcome',
    czech:      'Vitejte',
    danish:     'Velkomst',
    dutch:      'Welkom',
    estonian:   'Tere tulemast',
    finnish:    'Tervetuloa',
    flemish:    'Welgekomen',
    french:     'Bienvenue',
    german:     'Willkommen',
    irish:      'Failte',
    italian:    'Benvenuto',
    latvian:    'Gaidits',
    lithuanian: 'Laukiamas',
    polish:     'Witamy',
    spanish:    'Bienvenido',
    swedish:    'Valkommen',
    welsh:      'Croeso'
  }

  return obj_Welcome[language] || obj_Welcome['english'];
}