const displayPopup = () => {
  const popupSection = document.getElementById('popup_section');
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');

  body.classList.add('block_scroll');
  footer.classList.add('display_none');
  nav.classList.add('display_none');
  popupSection.classList.remove('display_none');
  popupSection.classList.add('display_block');
};
export default displayPopup;