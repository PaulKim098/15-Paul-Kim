/*
Challenge 1: Square All Numbers
Write a function that takes an array of numbers and returns a new array with each number squared.
Usage examples:
*/

function squareNumbers(arr){
    let squared = [];

    for (let i = 0; i < arr.length; i++) {
        squared.push(arr[i] ** 2); // or Math.pow((arr[i], 2));
    }
    return squared;
}

console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]