import{A as L,S as d,N as u,K as p,a as m,i as S}from"./assets/vendor-B13GzXhM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const E=document.querySelector(".header-nav-list"),x=document.querySelector(".js-menu-header"),w=document.querySelector(".js-menu-open"),f=document.querySelector(".js-menu-close"),n=document.querySelector(".js-menu"),q=document.querySelectorAll(".modal-nav-item, .modal-nav-order"),l=document.body;x.addEventListener("click",()=>{E.classList.toggle("visually-hidden")});document.addEventListener("DOMContentLoaded",()=>{w&&w.addEventListener("click",()=>{n&&(n.classList.add("is-open"),l.style.overflow="hidden")}),f&&f.addEventListener("click",()=>{n&&(n.classList.remove("is-open"),l.style.overflow="")}),q.forEach(e=>{e.addEventListener("click",()=>{n&&(n.classList.remove("is-open"),l.style.overflow="")})})});new L(".accordion-container",{duration:400,showMultiple:!0,openOnInit:[0]});const b=new d(".about-me-swiper-box",{direction:"horizontal",modules:[u,p],navigation:{nextBtnEl:".about-me-left-arrow-btn"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},loop:!0,allowTouchMove:!0}),P=document.querySelector(".about-me-left-arrow-btn");P.addEventListener("click",()=>{b.slideNext()});let y=!1;const k=new IntersectionObserver(([e])=>{y=e.isIntersecting},{threshold:.6}),I=document.querySelector(".about-me-swiper-box");k.observe(I);document.addEventListener("keydown",function(e){y&&e.key==="Tab"&&(e.preventDefault(),b.slideNext())});const N=new d(".swiper-box .swiper",{modules:[u,p],direction:"horizontal",slidesPerView:1,spaceBetween:20,navigation:{nextEl:".slider-arrow-next",prevEl:".slider-arrow-prev"},keyboard:{enabled:!0}});let h=!1;const O=new IntersectionObserver(([e])=>{h=e.isIntersecting},{threshold:.5}),M=document.querySelector(".swiper-box");O.observe(M);document.addEventListener("keydown",e=>{h&&e.key==="Tab"&&(e.preventDefault(),N.slideNext())});m.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function V(){const e=await m.get("/reviews");if(e.data.length===0)throw new Error("Sorry, there are no other reviews");return e.data}async function j(){try{const e=await V(),o=document.querySelector(".reviews-section .swiper-wrapper"),i=e.map(s=>`<li class="swiper-slide">

                        <img src="${s.avatar_url}" alt="photo of ${s.author}" class="review-photo">
                        <p class="review-name">${s.author}</p>
                        <p class="review-text">${s.review}</p>
                    </li>`).join("");o.insertAdjacentHTML("beforeend",i)}catch(e){document.querySelector(".reviews-section .swiper-wrapper").insertAdjacentHTML("beforeend",'<p class="reviews-error">Not found</p>'),S.show({title:"Error",message:e.message,color:"red",position:"topRight"})}}j();const v=new d(".reviews-section .swiper",{direction:"horizontal",modules:[u,p],spaceBetween:16,navigation:{nextEl:".reviews-section .swiper-button-next",prevEl:".reviews-section .swiper-button-prev"},keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:1,allowTouchMove:!0},768:{slidesPerView:2},1440:{slidesPerView:4,allowTouchMove:!0}}});let g=!1;const T=new IntersectionObserver(([e])=>{g=e.isIntersecting},{threshold:.5}),B=document.querySelector(".reviews-section .swiper");T.observe(B);let c;document.addEventListener("keydown",e=>{if(!g)return;const o=document.querySelector(".reviews-buttons-wrapper .swiper-button-prev"),i=document.querySelector(".reviews-buttons-wrapper .swiper-button-next");o.classList.contains("swiper-button-disabled")?c="right":i.classList.contains("swiper-button-disabled")&&(c="left"),e.key==="Tab"&&c==="right"?(e.preventDefault(),v.slideNext()):e.key==="Tab"&&c==="left"&&(e.preventDefault(),v.slidePrev())});
//# sourceMappingURL=index.js.map
