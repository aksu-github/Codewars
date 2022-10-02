/*
Instruction:

Complete the function so that it finds the average 
of the three scores passed to it and returns the 
letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

*/

//  My Solution 

function getGrade ( s1,s2,s3 ){
  let gradeData = [
    {value: 90, grade: 'A'},
    {value: 80, grade: 'B'},
    {value: 70, grade: 'C'},
    {value: 60, grade: 'D'},
    {value: 0, grade: 'F'}
  ];
  
  return gradeData.filter( e => (s1 + s2 + s3)/3 >= e.value)[0].grade;

}

//  Codewars - Similar Solution

function getGrade (s1, s2, s3) {
  const avg = (s1+s2+s3)/3;
  
  const grade = [
    [90, 'A'],
    [80, 'B'],
    [70, 'C'],
    [60, 'D'],
    [00, 'F'] 
  ]
  return grade.find(e => e[0] <= avg)[1]
}