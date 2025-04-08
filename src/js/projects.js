import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Keyboard } from 'swiper/modules';



document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper',
    {
   
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      modules: [Navigation, Keyboard],

       on: {
      init: updateArrowStates,
      slideChange: updateArrowStates,
    },
    });

  const nextBtn = document.querySelector('.slider-arrow-next');
  const prevBtn = document.querySelector('.slider-arrow-prev');
  
  function updateArrowStates() {

    if (swiper.isBeginning) {
      prevBtn.classList.remove('swiper-button-disabled');
      nextBtn.classList.add('swiper-button-disabled');
    } else if (swiper.isEnd) {
      nextBtn.classList.add('swiper-button-disabled');
      prevBtn.classList.remove('swiper-button-disabled');
    } else {
      prevBtn.classList.remove('swiper-button-disabled');
      nextBtn.classList.remove('swiper-button-disabled');
    }
    };


 
});