import Logo from '../img/vintage-restaurant-menu_23-2147491098.avif';

const getLogo = () => {
  const logo = document.querySelector('.logo');
  logo.src = Logo;
  logo.alt = 'logo';
};

export default getLogo;