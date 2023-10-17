/*Challenge 10: Palindrome Checker
Write a function that checks whether a passed string is a palindrome or not.
A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
Usage examples:
*/

function palindrome(word){
    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {
            reverse += word.charAt(i);
        } 
        return reverse === word;
    }

    // let reverse = "";

    // if(word.length < 1) return "This word does not have more than 1 or more characters"
    // else {
    //     for (let i = word.length - 1; i >= 0; i--) {
    //         reverse = word.charAt(i);
    //     }
    // } return reverse === word ? true : false;


console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('a')); // true
console.log(palindrome('madam')); // true