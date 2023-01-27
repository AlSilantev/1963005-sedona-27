if (window.matchMedia('(max-width: 767px)').matches) {
  const openMenuButton = document.querySelector('.header-navigation__button--open-menu');
  const closeMenuButton = document.querySelector('.header-navigation__button--close-menu');
  const headerNavigationMenu = document.querySelector('.header-navigation__list');
  const header = document.querySelector('.main-header');

  const openNavigationMenu = () => {
    openMenuButton.style.display = 'none';
    closeMenuButton.style.display = 'flex';
    headerNavigationMenu.style.display = 'block';
    header.style.height = '223px';

    openMenuButton.removeEventListener('click', openNavigationMenu);
    closeMenuButton.addEventListener('click', closeNavigationMenu);
  }

  const closeNavigationMenu = () => {
    openMenuButton.style.display = 'flex';
    closeMenuButton.style.display = 'none';
    headerNavigationMenu.style.display = 'none';
    header.style.height = '56px';

    openMenuButton.addEventListener('click', openNavigationMenu);
    closeMenuButton.removeEventListener('click', closeNavigationMenu);
    openMenuButton.addEventListener('click', openNavigationMenu);
  }

  header.style.height = '223px';
  closeMenuButton.addEventListener('click', closeNavigationMenu);
}
