// // Challenge 3: Count positive and negative numbers in an array
// // Write a function to count positive and negative numbers in an array
// // Usage examples:
// //let arr = [10, 20, -1, 22, 99, 20, -9];
// // console.log(`The negative numbers in an array is ${negativeCount}`) //"The negative numbers in an array is 2"
// // console.log(`The negative numbers in an array is ${poitiveCount}`) // "The positive numbers in an array is 5"

let arr = [10, 20, -1, 22, 99, 20, -9];

function getNegAndPosCount(arr){
    let posCount = 0, negCount = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] < 0 ? negCount++ : posCount++;
    }
    console.log(`The negative numbers in an array is ${negCount}`);
    console.log(`The positive numbers in an array is ${posCount}`);
}

getNegAndPosCount(arr);