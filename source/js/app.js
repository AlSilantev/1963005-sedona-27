if (window.matchMedia('(max-width: 767px)').matches) {
  const openMenuButton = document.querySelector('.header-navigation__button--open-menu');
  const closeMenuButton = document.querySelector('.header-navigation__button--close-menu');
  const headerNavigationMenu = document.querySelector('.header-navigation__list');
  const headerNavigation = document.querySelector('.header-navigation');
  const header = document.querySelector('.main-header');

  header.style.height = '56px';
  headerNavigation.classList.remove('header-navigation--default');
  headerNavigation.classList.add('header-navigation--open');
  openMenuButton.style.display = 'flex';
  headerNavigationMenu.style.display = 'none';

  const openNavigationMenu = () => {
    openMenuButton.style.display = 'none';
    closeMenuButton.style.display = 'flex';
    headerNavigationMenu.style.display = 'block';
    header.style.padding = '0';

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

  openMenuButton.addEventListener('click', openNavigationMenu);
}
