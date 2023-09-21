console.log("\nChallenge 10");
/* Challenge 10: Meal Suggestion
Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening") 
and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions 
based on the input parameters.
Usage examples:
*/

function suggestMeal(time, diet) {
    const mealSuggestions = {
      morning: {
        vegan: "Fruit smoothie with oats",
        vegetarian: "Vegetarian scrambled eggs with toast",
        omnivore: "Bacon and eggs with toast",
      },
      afternoon: {
        vegan: "Vegan burrito",
        vegetarian: "Vegetarian pizza",
        omnivore: "Chicken sandwich",
      },
      evening: {
        vegan: "Grilled vegetables with tofu",
        vegetarian: "Burnt aubergine veggie chilli",
        omnivore: "Korean BBQ Pork Sandwich",
      },
    };
  
    // Check if the specified combination exists in the mealSuggestions object
    if (time in mealSuggestions && diet in mealSuggestions[time]) {
      return mealSuggestions[time][diet];
    }
  
    // If the combination is not found, return a generic suggestion
    return "Sorry, we couldn't find a suggestion.";
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