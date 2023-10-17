/*Challenge 1: Find the Longest String
Write a function to find the longest string in the array.
Usage examples:
*/

function findLongestString(arr){
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > largest.length){
            largest = arr[i];
        }
    } return largest;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"

