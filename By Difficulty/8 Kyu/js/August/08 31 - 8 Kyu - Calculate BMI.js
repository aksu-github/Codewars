/*
Instruction:

Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

//  My Solution 

//  Tried to do something else other than if else loops

function bmi(weight, height) {
  let bmiChart = [
    {value: 18.5, diagnosis: 'Underweight'},
    {value: 25.0, diagnosis: 'Normal'},
    {value: 30.0, diagnosis: 'Overweight'},
  ];
  
  bmiChart = bmiChart.filter( e => weight / height ** 2 <= e.value )
  
  return bmiChart.length ? bmiChart[0].diagnosis : 'Obese'
  
}