/*Challenge 2: Multi-level conditions
Write a function called assignGrade that takes a number score and assigns a letter grade based on the score.
The function should return "A" for scores 90 and above, "B" for scores 80 - 89, "C" for scores 70 - 79, 
"D" for scores 60 - 69 and "F" for scores below 60.
Usage examples:
*/

function assignGrade(score){
    switch(true) {
        case score >= 90:
            return "A"
            break;
        case score >= 80:
            return "B"
            break;
        case score >= 70:
            return "C"
            break;
        case score >= 60:
            return "D"
            break;
        default:
            return "F"
    }
}

console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"