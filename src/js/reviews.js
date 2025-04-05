import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";

async function getImagesByQuery() {
    const response = await axios.get("/reviews")
    
    if (response.data.length === 0) {
        throw new Error('Sorry, there are no other reviews');
    } else {
        return response.data;
    }

}

try {
    const data = await getImagesByQuery();
    console.log(data);
    const swiperWriper = document.querySelector(".reviews-section .swiper-wrapper");
    const markup = data
        .map((el) =>
            `<li class="swiper-slide">
                <img src="${el.avatar_url}" alt="photo of ${el.author}" class="review-photo">
                <p class="review-name">${el.author}</p>
                <p class="review-text">${el.review}</p>
            </li>`
                
        )
        .join("");
    swiperWriper.insertAdjacentHTML("beforeend", markup)
}
catch (error) {
    const swiperWriper = document.querySelector(".reviews-section .swiper-wrapper");
    swiperWriper.insertAdjacentHTML("beforeend", '<p class="reviews-error">Not found</p>');
    iziToast.show({
                    title: 'Error',
                    message: error.message,
                    color: 'red',
                    position: "topRight"
                });
}
           


const swiper = new Swiper('.reviews-section .swiper', {
    direction: 'horizontal',
    modules: [Navigation],
    spaceBetween: 16,
    navigation: {
        nextEl: '.reviews-section .swiper-button-next',
        prevEl: '.reviews-section .swiper-button-prev',
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        allowTouchMove: true
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    1440: {
        slidesPerView: 4,
        allowTouchMove: false
    }
  }
});