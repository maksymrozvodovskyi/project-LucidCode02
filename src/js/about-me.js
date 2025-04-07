import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
});

const swiper = new Swiper('.about-me-swiper-box', {
  direction: 'horizontal',
  modules: [Navigation, Keyboard],
  navigation: {
    nextBtnEl: '.about-me-left-arrow-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  loop: true,
  allowTouchMove: true,
});

const nextBtnEl = document.querySelector(
  '.about-me-left-arrow-btn'
);
nextBtnEl.addEventListener('click', () => {
  swiper.slideNext();
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Tab') {
    evt.preventDefault();
    swiper.slideNext();
  }
});  
