const desplayMeal = (mealContainerElement, meal) => {
    const mealsList = document.getElementById('meals_list');
    mealsList.appendChild(mealContainerElement);
};
  
  export default desplayMeal;