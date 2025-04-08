import Swiper from 'swiper';
import 'swiper/css';
import { Navigation,Keyboard } from 'swiper/modules';



const swiper = new Swiper('.swiper-box .swiper',
    {
      modules: [Navigation, Keyboard],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
      },

      keyboard: {
        enabled: true
      }


    });

    let isInVPr = false;
    const observerProjectsSection = new IntersectionObserver(
    ([entry]) => {
        isInVPr = entry.isIntersecting;
    },
    { threshold: 0.5 }
    );

    const projectsSwiperElement = document.querySelector('.swiper-box');
    observerProjectsSection.observe(projectsSwiperElement);
    document.addEventListener('keydown',  (evt) => {
        if (!isInVPr) return;
        if (evt.key === 'Tab') {
            evt.preventDefault();
            swiper.slideNext();
        }

    });