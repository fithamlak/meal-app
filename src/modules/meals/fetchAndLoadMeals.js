import displayMeal from "./displayMeal.js";
import mealContainer from "./containerForMeal.js";
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMeals = async () => {
  const request = await fetch(apiUrl);
  const { meals } = await request.json();
  return meals;
};

export const fetchAndLoadMeals = async () => {
    const meals = await getMeals();
    meals.forEach((meal) => {
      const containerElement = mealContainer(meal);
      displayMeal(containerElement);
      
    });
  };