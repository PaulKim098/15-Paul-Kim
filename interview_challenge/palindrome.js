//A palindrome is something that reads the same backwards and forwards. 
//The largest palindrome made from the product of any two numbers between 0 and 12 is 121 (11 * 11).
//Find the largest palindrome made from the product of any two numbers between 0 and 1000.

function isPalindrome(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}

function findLargestPalindrome() {
    let largestPalindrome = 0;
    let num1ForLargest = 0;
    let num2ForLargest = 0;

    for (let num1 = 1000; num1 >= 0; num1--) {
        for (let num2 = 1000; num2 >= 0; num2--) {
            const product = num1 * num2;
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
                num1ForLargest = num1;
                num2ForLargest = num2;
            }
        }
    }
    console.log(`The largest palindrome is ${largestPalindrome}`);
    console.log(`It is created by multiplying ${num1ForLargest} and ${num2ForLargest}`);

    return largestPalindrome;
}

console.log(findLargestPalindrome());