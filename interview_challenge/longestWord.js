const string = 'I have a challenge cool';

const array = string.split(' ');
let longest = 0;
let longestWord = "";

for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (word.length > longest) {
        longest = word.length;
        longestWord = word;
    }
}

console.log(longestWord);