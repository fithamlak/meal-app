import closePopup from './closePopup.js';

const createPopup = () => {
  const popupSection = document.getElementById('popup_section');
  const popupContainer = document.createElement('section');
  popupContainer.setAttribute('id', 'popup_container');
  popupContainer.innerHTML = `    
      <div class='image_section'>
       <img class='thumb' src="" alt='meal image'/>  
       <h2 class="mealName"></h2>
      </div>    
      <section class='information'>
        <h4 class='category'></h4>
        <h4 class='area'></h4>
        <p class='instructions'></p>
      </section>
      <i id='popup_close' class='fa-solid fa-xmark fa-2x'></i> 
        `;
  popupSection.appendChild(popupContainer);
  const closeIcon = document.getElementById('popup_close');
  closeIcon.addEventListener('click', () => {
    closePopup();
  });
};

export default createPopup;