import { fetchMealLikes } from '../Likes/fetchLikes.js';
import mealsCountContainer from './containerForMeal.js';
import desplayMeal from './desplayMeal.js';

const totalMeals = document.querySelector('.total-meals');
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMeals = async () => {
  const request = await fetch(apiUrl);
  const { meals } = await request.json();
  return meals;
};

export const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach(async (meal) => {
    const like = await fetchMealLikes(meal.idMeal);
    const cardElement = mealsCountContainer(meal, like);
    desplayMeal(cardElement, meal);
  });
  totalMeals.innerHTML = `(${meals.length}) meals`;
};
