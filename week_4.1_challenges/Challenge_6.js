/*
Challenge 6: Calculate Average
Write a function that takes an array of numbers and returns the average.
Usage examples:
*/

function calculateAverage(arr){
    let total = 0;
    let length = arr.length

    if (length === 0) return NaN;

    for (let i = 0; i < length; i++) {
        total += arr[i];
    }
    return average = total / length;
}

console.log(calculateAverage([]));
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30