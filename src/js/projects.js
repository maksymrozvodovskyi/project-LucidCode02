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
  });

  const nextBtn = document.querySelector('.slider-arrow.next');
  const prevBtn = document.querySelector('.slider-arrow.prev');

function updateButtonStates() {
   

    if (swiper.isBeginning) {
      prevBtn.classList.remove('active');
    } else {
      prevBtn.classList.add('active');
    }

    if (swiper.isEnd) {
      nextBtn.classList.remove('active');
    } else {
      nextBtn.classList.add('active');
    }
  }
  swiper.on('slideChange', updateButtonStates);
  updateButtonStates();
 
});


