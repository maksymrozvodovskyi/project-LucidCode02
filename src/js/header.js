// `use strict`;

const headerNav = document.querySelector('.header-nav-list');
const headerMenuNav = document.querySelector('.js-menu-header');
const openModalBtn = document.querySelector('.js-menu-open');
const closeModalBtn = document.querySelector('.js-menu-close');
const modal = document.querySelector('.js-menu');
const closeOnElements = document.querySelectorAll('.modal-nav-item, .modal-nav-order');



headerMenuNav.addEventListener('click', () => {
   headerNav.classList.toggle('visually-hidden');
});

document.addEventListener('DOMContentLoaded', () => {
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
     
      if (modal) {
        modal.classList.add('is-open');
      }
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (modal) {
        modal.classList.remove('is-open');
      }
    });
  }

  closeOnElements.forEach(element => {
    element.addEventListener('click', () => {
      if (modal) {
        modal.classList.remove('is-open');
      }
    });
  });
});
