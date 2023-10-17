/*
Challenge 2: Concatenate Array Elements
Write a function that takes an array of strings and concatenates all the elements into one string.
Usage examples:
*/

function concatenateElements(arr){
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    return str;

    // return arr.join(" ");
}

console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"