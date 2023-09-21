/*Challenge 9: Find the Longest Word in a String
Write a function that returns the length of the longest word in the provided sentence.
Usage examples:
*/

function findLongestWord(sentence){
    let words = sentence.split(" ");
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordLength = words[i].length;

        if(wordLength > longestLength){
            longestLength = wordLength;
        }

    } return longestLength;
}


console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7

