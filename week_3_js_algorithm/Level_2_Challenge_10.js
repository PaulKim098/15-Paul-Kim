console.log("\nChallenge 10");
/* Challenge 10: Meal Suggestion
Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening") 
and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions 
based on the input parameters.
Usage examples:
*/

function suggestMeal(time, diet) {
  let suggestion = "Sorry, we couldn't find a suggestion.";

  switch (time) {
    case "morning":
      switch (diet) {
        case "vegan":
          suggestion = "Fruit smoothie with oats";
          break;
        case "vegetarian":
          suggestion = "Vegetarian scrambled eggs with toast";
          break;
        case "omnivore":
          suggestion = "Bacon and eggs with toast";
          break;
      }
      break;
    case "afternoon":
      switch (diet) {
        case "vegan":
          suggestion = "Vegan burrito";
          break;
        case "vegetarian":
          suggestion = "Vegetarian pizza";
          break;
        case "omnivore":
          suggestion = "Chicken sandwich";
          break;
      }
      break;
    case "evening":
      switch (diet) {
        case "vegan":
          suggestion = "Grilled vegetables with tofu";
          break;
        case "vegetarian":
          suggestion = "Burnt aubergine veggie chilli";
          break;
        case "omnivore":
          suggestion = "Korean BBQ Pork Sandwich";
          break;
      }
      break;
  }

  return suggestion;
}
  
  // Test cases
  console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
  console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
  console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
  console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
  console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
  console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
  console.log(suggestMeal("evening", "vegan")); // "Grilled vegetables with tofu"
  console.log(suggestMeal("evening", "vegetarian")); // "Burnt aubergine veggie chilli"
  console.log(suggestMeal("evening", "omnivore")); // "Korean BBQ Pork Sandwich"