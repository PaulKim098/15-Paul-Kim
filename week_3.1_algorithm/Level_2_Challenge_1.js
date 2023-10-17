/*Challenge 1: Simple check
Write a function called checkGreaterTen that takes a number as an argument and checks whether it's greater than 10.
If the number is greater than 10, return the string "Greater than 10". If not, return the string "Not greater than 10".
Usage examples:
*/

function checkGreaterTen(num){
    const number = 10;
    if(num > number) return "Greater than 10";
    else return "Not greater than 10";
}

console.log(checkGreaterTen(15)); // "Greater than 10"
console.log(checkGreaterTen(5)); // "Not greater than 10"
console.log(checkGreaterTen(10)); // "Not greater than 10"