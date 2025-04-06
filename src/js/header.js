`user strict`;

const headerNav = document.querySelector('.header-nav-list');
const headerMenuNav = document.querySelector('.header-nav-button');

headerMenuNav.addEventListener('click', () => {
  headerNav.classList.toggle('visually-hidden');
});
