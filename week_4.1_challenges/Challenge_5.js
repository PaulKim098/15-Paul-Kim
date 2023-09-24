/*
Challenge 5: Remove Duplicate Elements
Write a function that takes an array and returns a new array with duplicate elements removed.
Usage examples:
*/

function removeDuplicates(arr) {
    return Array.from(new Set(arr));

    // const uniqueArray = [];
  
    // for (let i = 0; i < arr.length; i++) {
    //   if (uniqueArray.indexOf(arr[i]) === -1) {
    //     uniqueArray.push(arr[i]);
    //   }
    // }
  
    // return uniqueArray;
  }


console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]