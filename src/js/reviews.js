import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

async function getImagesByQuery() {
  const response = await axios.get('/reviews');
  if (response.data.length === 0) {
    throw new Error('Sorry, there are no other reviews');
  } else {
    return response.data;
  }
}

async function createreviews() {
  try {
    const data = await getImagesByQuery();
    const swiperWriper = document.querySelector(
      '.reviews-section .swiper-wrapper'
    );
    const markup = data
      .map(
        el =>
          `<li class="swiper-slide">

                        <img src="${el.avatar_url}" alt="photo of ${el.author}" class="review-photo">
                        <p class="review-name">${el.author}</p>
                        <p class="review-text">${el.review}</p>
                    </li>`
      )
      .join('');
    swiperWriper.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    const swiperWriper = document.querySelector(
      '.reviews-section .swiper-wrapper'
    );
    swiperWriper.insertAdjacentHTML(
      'beforeend',
      '<p class="reviews-error">Not found</p>'
    );
    iziToast.show({
      title: 'Error',
      message: error.message,
      color: 'red',
      position: 'topRight',
    });
  }
}

createreviews();

const reviewsSwiper = new Swiper('.reviews-section .swiper', {
  direction: 'horizontal',
  modules: [Navigation, Keyboard],
  spaceBetween: 16,
  navigation: {
    nextEl: '.reviews-section .swiper-button-next',
    prevEl: '.reviews-section .swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    // when window width is >=768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 4,
      allowTouchMove: true,
    },
  },
});

let isInViewport = false;

const observer = new IntersectionObserver(
  ([entry]) => {
    isInViewport = entry.isIntersecting;
  },
  { threshold: 0.5 }
);
const reviewsSwiperElement = document.querySelector('.reviews-section .swiper');
observer.observe(reviewsSwiperElement);

let direction;
document.addEventListener('keydown', event => {
  if (!isInViewport) return;
  const leftButton = document.querySelector(
    '.reviews-buttons-wrapper .swiper-button-prev'
  );
  const rightButton = document.querySelector(
    '.reviews-buttons-wrapper .swiper-button-next'
  );
  if (leftButton.classList.contains('swiper-button-disabled')) {
    direction = 'right';
  } else if (rightButton.classList.contains('swiper-button-disabled')) {
    direction = 'left';
  }
  if (event.key === 'Tab' && direction === 'right') {
    event.preventDefault();
    reviewsSwiper.slideNext();
  } else if (event.key === 'Tab' && direction === 'left') {
    event.preventDefault();
    reviewsSwiper.slidePrev();
  }
});
