const displayMeal = (mealContainerElement) => {
  const mealsList = document.getElementById('meals_list');
  mealsList.appendChild(mealContainerElement);
};

export default displayMeal;