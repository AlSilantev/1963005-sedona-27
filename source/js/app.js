if (window.matchMedia('(max-width: 767px)').matches) {
  const openMenuButton = document.querySelector('.header-navigation__button--open-menu');
  const closeMenuButton = document.querySelector('.header-navigation__button--close-menu');
  const headerNavigationList = document.querySelector('.header-navigation__list');
  const headerNavigation = document.querySelector('.header-navigation');
  const header = document.querySelector('.main-header');

  header.style.height = '56px';
  headerNavigation.classList.remove('header-navigation--default');
  headerNavigation.classList.add('header-navigation--open');
  headerNavigationList.classList.add('header-navigation__list--closed')
  openMenuButton.style.display = 'flex';

  const openNavigationMenu = () => {
    openMenuButton.style.display = 'none';
    closeMenuButton.style.display = 'flex';
    headerNavigationList.classList.remove('header-navigation__list--closed');

    openMenuButton.removeEventListener('click', openNavigationMenu);
    closeMenuButton.addEventListener('click', closeNavigationMenu);
  }

  const closeNavigationMenu = () => {
    closeMenuButton.style.display = 'none';
    openMenuButton.style.display = 'flex';
    headerNavigationList.classList.add('header-navigation__list--closed')
    header.style.height = '56px';

    closeMenuButton.removeEventListener('click', closeNavigationMenu);
    openMenuButton.addEventListener('click', openNavigationMenu);
  }

  openMenuButton.addEventListener('click', openNavigationMenu);
}
