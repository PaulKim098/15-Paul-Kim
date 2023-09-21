/*Challenge 1: Find the Longest String
Write a function to find the longest string in the array.
Usage examples:
*/

function findLongestString(arr){
    let largest = arr[arr.length - 1];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > arr[i-1].length){
            largest = arr[i];
        }
    } return largest;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"

