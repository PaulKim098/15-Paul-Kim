/*Challenge 6: Season Checker
Write a function called checkSeason that takes a month as an argument (from 1-12 where 1 is January and 12 is December) 
and checks which season it is based on meteorological seasons. The function should return "Winter" for December (12), 
January (1), and February (2), "Spring" for March (3), April (4), and May (5), "Summer" for June (6), July (7), 
and August (8), and "Autumn" for September (9), October (10), and November (11).
Usage examples:
*/

function checkSeason(month) {
    switch (month) {
      case 12:
      case 1:
      case 2:
        return "Winter";
      case 3:
      case 4:
      case 5:
        return "Spring";
      case 6:
      case 7:
      case 8:
        return "Summer";
      case 9:
      case 10:
      case 11:
        return "Autumn";
      default:
        return "Invalid month";
    }
  }


  // function checkSeason(month){
  //   if((month >= 1 && month <= 2) || month === 12){
  //     return "Winter";
  //   } else if(month >= 3 && month <= 5){
  //     return "Spring";
  //   } else if (month >= 6 && month <= 8) {
  //     return "Summer";
  //   } else if (month >= 9 && month <= 11) {
  //     return "Autumn";
  //   } else return "Invalid month";
  // }

console.log(checkSeason(1)); // "Winter"
console.log(checkSeason(4)); // "Spring"
console.log(checkSeason(7)); // "Summer"
console.log(checkSeason(10)); // "Autumn"