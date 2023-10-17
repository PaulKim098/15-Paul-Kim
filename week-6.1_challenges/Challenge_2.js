// // Challenge 2: Find the most frequent element in a given array
// // Write a function to find the most frequent element in the array. 
// If there are multiple elements that appear a maximum number of times, print the first of them
// // Usage examples:
// //let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

// // let n = arr.length;
// // console.log(mostFrequent(arr, n));; // 40

let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
let n = arr.length;

function mostFrequent(arr, n) {
    let maxcount = 0;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {``
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j]) count++;
        }
        if (count > maxcount) {
            maxcount = count;
            element_having_max_freq = arr[i];
        }
    }
    return element_having_max_freq;
}

console.log(mostFrequent(arr, n)); // 40