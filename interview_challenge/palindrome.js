//A palindrome is something that reads the same backwards and forwards. 
//The largest palindrome made from the product of any two numbers between 0 and 12 is 121 (11 * 11).
//Find the largest palindrome made from the product of any two numbers between 0 and 1000.

function getLargestPalindrome(limit) {
    let largestPalindrome = 0;
    let num1ForLargest = 0;
    let num2ForLargest = 0;

    for (let num1 = limit; num1 >= 0; num1--) {
        for (let num2 = num1; num2 >= 0; num2--) {
            const product = num1 * num2;
            if (product <= largestPalindrome) break;
            if (isPalindrome(product)) largestPalindrome = product;
            num1ForLargest = num1;
            num2ForLargest = num2;
        }
    }
    return largestPalindrome;
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

console.log(getLargestPalindrome(1000));