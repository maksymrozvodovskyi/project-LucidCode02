import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow.next',
      prevEl: '.slider-arrow.prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 3 }
    }
  });
});