/**
 * @jest-environment jsdom
 */

import mealContainer from './containerForMeal.js';
import countMeals from './countMeals.js';

describe('Homepage meals counter tests', () => {
  document.body.innerHTML = `
    <section id="meals_list"></section>
      <span class="total-meals"></span>
   `;
  const meals = [
    {
      strMeal: 'Baked salmon with fennel & tomatoes',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      idMeal: '52959',
      strArea: 'Europe',
    },
    {
      strMeal: 'Cajun spiced fish tacos',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
      idMeal: '52819',
      strArea: 'Europe',
    },
  ];
  const cntMeals = document.querySelector('#meals_list');
  const mealsAmount = document.querySelector('.total-meals');
  it('Should display 2 meals, so counter should be 2', () => {
    meals.forEach((meal) => {
      const mealCont = mealContainer(meal, 5);
      cntMeals.appendChild(mealCont);
    });
    countMeals();
    expect(mealsAmount.textContent).toBe('(2) meals');
  });

  it('Should display 5 meals, so counter should be 5', () => {
    cntMeals.textContent = '';
    meals.push(
      {
        strMeal: 'Baked salmon with fennel & tomatoes',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
        idMeal: '52959',
        strArea: 'US',
      },
      {
        strMeal: 'Cajun spiced fish tacos',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
        idMeal: '52819',
        strArea: 'Europe',
      },
      {
        strMeal: 'Baked salmon with fennel & tomatoes',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
        idMeal: '52959',
        strArea: 'Europe',
      },
    );
    meals.forEach((meal) => {
      const mealCont = mealContainer(meal, 5);
      cntMeals.appendChild(mealCont);
    });
    countMeals();
    expect(mealsAmount.textContent).toBe('(5) meals');
  });
  it('Should display 4 meals, so counter should be 4', () => {
    meals.pop();
    cntMeals.textContent = '';
    meals.forEach((meal) => {
      const mealCont = mealContainer(meal, 5);
      cntMeals.appendChild(mealCont);
    });
    countMeals();
    expect(mealsAmount.textContent).toBe('(4) meals');
  });
});