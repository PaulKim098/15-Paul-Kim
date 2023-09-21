/*Challenge 6: Factorial a Number
Write a function that takes a number as an argument and returns the factorial of that number.
Usage examples:
*/

function factorial(num){
    if(num === 0 || num === 1) return 1;
    else {
        let temp = num;
        for(let i = temp; i >= 2; i--){
            num *= i - 1;
        }
    } return num
}


console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800

