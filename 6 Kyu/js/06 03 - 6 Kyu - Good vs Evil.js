/*
Instruction:

Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. 
Different races will certainly be involved. Each race has a certain worth when battling against others. 

On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10

On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, 
if you add up the worth of the side of good and compare it with the worth of the side of evil, 
the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, 
followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. 
Each parameter will be a string of multiple integers separated by a single space. 
Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. 
The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, 
"Battle Result: Evil eradicates all trace of Good" if evil wins, or 
"Battle Result: No victor on this battle field" if it ends in a tie.

*/

//  My Solution

//  input:
//      goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
//  output:
//      if good wins -- "Battle Result: Good triumphs over Evil"
//      if evil wins -- "Battle Result: Evil eradicates all trace of Good"
//      if tie -------- "Battle Result: No victor on this battle field"

// function goodVsEvil(good, evil){
//     const goodWorth = {
//         'Hobbits': 1,
//         'Men': 2,
//         'Elves': 3,
//         'Dwarves': 3,
//         'Eagles': 4,
//         'Wizards': 10,
//     };
//     const evilWorth = {
//         'Orc': 1,
//         'Men': 2,
//         'Wargs': 2,
//         'Goblins': 2,
//         'Uruk Hai': 3,
//         'Trolls': 5,
//         'Wizards': 10
//     }

//     let goodUnits = good.split(' ').map(Number);
//     let evilUnits = evil.split(' ').map(Number);

//     let goodWorthArr = Array.from(Object.values(goodWorth))
//     let evilWorthArr = Array.from(Object.values(evilWorth))

//     let goodValue = evilValue = 0;

//     for (let i = 0; i < goodUnits.length; i++){
//         goodValue += (goodUnits[i]*goodWorthArr[i])
//     }
//     for (let i = 0; i < evilUnits.length; i++){
//         evilValue += (evilUnits[i]*evilWorthArr[i])
//     }
    
//     return (goodValue > evilValue ? "Battle Result: Good triumphs over Evil" : (goodValue < evilValue ? 
//         "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field"))
// }

//  Codewars - Solution Most Similar to My Thought Process

let app = {}

app.good = [
    { Name : "Hobbits", Strength : 1 },
    { Name : "Men",     Strength : 2 },
    { Name : "Elves",   Strength : 3 },
    { Name : "Dwarves", Strength : 3 },
    { Name : "Eagles",  Strength : 4 },
    { Name : "Wizards", Strength : 10 }
];
            
app.evil = [
    { Name : "Orcs",        Strength : 1 },
    { Name : "Men",         Strength : 2 },
    { Name : "Wargs",       Strength : 2 },
    { Name : "Goblins",     Strength : 2 },
    { Name : "Uruk Hai",    Strength : 3 },
    { Name : "Trolls",      Strength : 5 },
    { Name : "Wizards",     Strength : 10 }
];
           
app.battleResults = [
    { Won : "Evil", Message : "Battle Result: Evil eradicates all trace of Good"},
    { Won : "Good", Message : "Battle Result: Good triumphs over Evil"},
    { Won : "Tie",  Message : "Battle Result: No victor on this battle field"}
];

app.getBattleResultMessage = function(str) { 
    //console.log(this.battleResults[0])
    //console.log(this.battleResults.map(e => e.Won).indexOf(str))
    //console.log(this.battleResults[this.battleResults.map(e => e.Won).indexOf(str)].Message)
    return this.battleResults[this.battleResults.map(function(e) { return e.Won; }).indexOf(str)].Message; 
}

function goodVsEvil(good, evil){
  let goodUnits = good.split(' ');
  let evilUnits = evil.split(' ');
  let goodValue = 0;
  let evilValue = 0;
  
  for(let i = 0; i < goodUnits.length; i++){
    goodValue += app.good[i].Strength * goodUnits[i];    
  }
  for(let i = 0; i < evilUnits.length; i++){
    evilValue += app.evil[i].Strength * evilUnits[i];
  }
  
return  (goodValue > evilValue ? app.getBattleResultMessage('Good') : 
        (goodValue < evilValue ? app.getBattleResultMessage('Evil') : app.getBattleResultMessage('Tie')))
}

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')