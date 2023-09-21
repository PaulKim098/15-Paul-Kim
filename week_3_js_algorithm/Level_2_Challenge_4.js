/*Challenge 4: Multi-level conditions II
Write a function called checkEligibility that accepts an age and returns whether the person is eligible to vote, 
drive, and/or drink. If the person is 16 or older, they can drive. If they are 18 or older, they can vote. 
If they are 21 or older, they can drink.
Usage examples:
*/

function checkEligibility(age) {
    let eligibility = [];
  
    if (age >= 16) {
      eligibility.push("drive");
    }
  
    if (age >= 18) {
      eligibility.push("vote");
    }
  
    if (age >= 21) {
      eligibility.push("drink");
    }
  
    if (eligibility.length === 0) {
      return `Can't vote, drive, or drink.`;
    }
  
    return `Can ${eligibility.join(", ")}.`;
  }


console.log(checkEligibility(15)); // "Can't vote, drive, or drink"
console.log(checkEligibility(16)); // "Can drive"
console.log(checkEligibility(18)); // "Can vote and drive"
console.log(checkEligibility(22)); // "Can vote, drive, and drink"