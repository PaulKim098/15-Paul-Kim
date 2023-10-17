// Challenge 4: Find duplicates in two arrays 
// Write a function that takes two arrays as arguments and returns an array of values 
// that are repeated more than once across the two input arrays
// Usage examples:
//const array1 = [1, 2, 3, 4, 5, 5]; const array2 = [4, 5, 6, 7, 7, 8]; 
//console.log(findDuplicates(array1, array2)); //  [4, 5, 7]



function findDuplicates(array1, array2){
    const combinedArray = [...array1, ...array2];
    const elementCounts = {};

    combinedArray.forEach((element) => {
        if (elementCounts[element]) {
            elementCounts[element]++;
        } else {
            elementCounts[element] = 1;
        }
    });

    const duplicates = Object.keys(elementCounts).filter(element => elementCounts[element] > 1);
    return duplicates.map(Number);
}

const array1 = [1, 2, 3, 4, 5, 5]; 
const array2 = [4, 5, 6, 7, 7, 8]; 

console.log(findDuplicates(array1, array2)); // [4, 5, 7]

