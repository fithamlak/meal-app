
const createPopup = () => {
    const popupSection = document.getElementById('popup_section');
    const popupContainer = document.createElement('section');
    popupContainer.setAttribute('id', 'pop__container');
    popupContainer.innerHTML = `    
      <div class="image__section">
        <img class="thumb" src="" alt="meal image"/>
        <h2 class="mealName"></h2>
      </div>    
      <section class="information">
        <h4 class="category"></h4>
        <h4 class="area"></h4>
        <p class="instructions"></p>
      </section>
      <i id='pop__close' class="fa-solid fa-xmark fa-2x"></i>
        `;
    popupSection.appendChild(popupContainer);
  const closeIcon = document.getElementById('popup__close');
  closeIcon.addEventListener('click', () => {
    closePopup();
  });

};