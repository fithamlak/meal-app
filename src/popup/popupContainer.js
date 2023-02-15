import closePopup from './closePopup.js';
import addComments from '../modules/Comments/addComment.js';

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
      <section class='comment_section'>
        <section class='load_comments'>
          <h2 id='comments_title'>Comments</h2>
          <div id='prev_comments'>          
            <ul id="comments_List"></ul>
          </div>
         <h5 id='error_message'></h5>
        </section>
        <section >
          <form id='input_form' class="add_comment" action="">
            <h2>Add your comment</h2>
            <input id='name' class='form-control' type="text" placeholder="Your name" autocomplete='off' required>
            <textarea id='comment' class='form-control' type="text" rows='6' maxlength="50" placeholder="Your insights" autocomplete='off' required></textarea>
            <button id='comment__button' class='btn btn-outline-primary comments_button' type="submit">Comment</button>
          </form>
        </section>
      </section>  
      <i id='popup_close' class='fa-solid fa-xmark fa-2x'></i> 
        `;
  popupSection.appendChild(popupContainer);
  const closeIcon = document.getElementById('popup_close');
  closeIcon.addEventListener('click', () => {
    closePopup();
  });
  const form = document.getElementById('input_form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const idMeal = document.querySelector('.category').id;
    addComments(idMeal);
  });
};

export default createPopup;