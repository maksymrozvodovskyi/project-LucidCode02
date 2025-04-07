import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Keyboard } from 'swiper/modules';



document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-projects',
    {
     wrapperClass: 'swiper-wrapper-projects',
      slideClass: 'swiper-slide-projects', 
    
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
  });

  const nextBtn = document.querySelector('.slider-arrow.next');
  const prevBtn = document.querySelector('.slider-arrow.prev');


  nextBtn.classList.add('active');

  nextBtn.addEventListener('click', () => {
    nextBtn.classList.add('active');
    prevBtn.classList.remove('active');
  });

  prevBtn.addEventListener('click', () => {
    prevBtn.classList.add('active');
    nextBtn.classList.remove('active');
  });
});


