/*
Challenge 7: Find Odd Numbers
Write a function that takes an array of numbers and returns a new array with only the odd numbers.
Usage examples:
*/

function findOddNumbers(arr){
    return arr.filter((element) => element % 2 === 1);

    // let newArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] % 2 === 1){
    //         newArr.push(arr[i]);
    //     }
    // }
    // return newArr;
}


console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(findOddNumbers([2, 4, 6, 8, 10])); // []