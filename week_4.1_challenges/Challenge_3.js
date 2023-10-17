/*
Challenge 3: Reverse Array
Write a function that takes an array and returns a new array with the elements in reverse order.
Usage examples:
*/

function reverseArray(arr){
    // let reverse = [];

    // for (let i = arr.length - 1; i >= 0; i--) {
    //     reverse.push(arr[i]);
    // }
    // return reverse;

    return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]