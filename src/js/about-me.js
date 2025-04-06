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
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 3,
      allowTouchMove: true,
    },
    1440: {
      slidesPerView: 6,
      allowTouchMove: false,
    },
  },
});

const nextBtnEl = document.querySelector(
  '.about-me-left-arrow-btn'
);
nextBtnEl.addEventListener('click', () => {
  swiper.slideNext();
});
