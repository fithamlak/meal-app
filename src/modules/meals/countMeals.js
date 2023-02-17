const countMeals = () => {
  const totalMeals = document.querySelector('.total-meals');
  const tot = document.querySelector('#meals_list').childElementCount;
  totalMeals.innerHTML = `(${tot}) meals`;
};

export default countMeals;
