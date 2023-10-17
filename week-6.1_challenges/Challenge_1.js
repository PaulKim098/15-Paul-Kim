// // Challenge 1: Find the Largest Palindrome
// // Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
// // Usage examples:
// // console.log(getLargestPalindrome(1000));; // 90909

function getLargestPalindrome(limit) {
    function isPalindrome(num) {
        return num.toString() === num.toString().split('').reverse().join('');
    }
    
    let largestPalindrome = 0;
    for (let num1 = limit; num1 >= 0; num1--) {
        for (let num2 = num1; num2 >= 0; num2--) {
            const product = num1 * num2;
            if (product <= largestPalindrome) break;
            if (isPalindrome(product)) largestPalindrome = product;
        }
    }
    return largestPalindrome;
}

console.log(getLargestPalindrome(1000));

