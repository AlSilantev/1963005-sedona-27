const openMenuButton = document.querySelector('.header-navigation__button--open-menu');
const closeMenuButton = document.querySelector('.header-navigation__button--close-menu');
const headerNavigationMenu = document.querySelector('.header-navigation__list');

const openNavigationMenu = () => {
  openMenuButton.style.display = 'none';
  closeMenuButton.style.display = 'flex';
  headerNavigationMenu.style.display = 'block';

  openMenuButton.removeEventListener('click', openNavigationMenu);
  closeMenuButton.addEventListener('click', closeNavigationMenu);
}

const closeNavigationMenu = () => {
  openMenuButton.style.display = 'flex';
  closeMenuButton.style.display = 'none';
  headerNavigationMenu.style.display = 'none';

  openMenuButton.addEventListener('click', openNavigationMenu);
  closeMenuButton.removeEventListener('click', closeNavigationMenu);
}

openMenuButton.addEventListener('click', openNavigationMenu);
