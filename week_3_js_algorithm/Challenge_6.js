/*
6 - Finish the function. It should accept two parameters and return the larger one.
*/

function findBiggerNumber(firstNum, secondNum) {
    if(firstNum > secondNum){
      return firstNum;
    }
    else{
      return secondNum;
    }
  }
  
  console.log(findBiggerNumber(6, 7)); // 7
  console.log(findBiggerNumber(5, 1)); // 5
  console.log(findBiggerNumber(2, 2)); // 2