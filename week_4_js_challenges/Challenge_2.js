/*Challenge 2: Find the Largest Number
Write a function to find the largest number in the array.
Usage examples:
*/

function findLargestNumber(arr){
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) { // Start from index 1
        const element = arr[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1

