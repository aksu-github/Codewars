/*
Instruction:

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

*/

//  My Solution 

function finalGrade (exam, projects) {

  return exam > 90 || projects > 10 ? 100 :
         exam > 75 && projects > 4 ? 90 : 
         exam > 50 && projects > 1 ? 75 :
        0;
}