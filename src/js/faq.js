import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const accordion = new Accordion(".accordion-container");
  const panels = document.querySelectorAll('.ac');
  panels.forEach(panel => {
    const trigger = panel.querySelector('.ac-trigger');
    trigger.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".ac");

//   items.forEach((item) => {
//     const trigger = item.querySelector(".ac-trigger");

//     trigger.addEventListener("click", () => {
//       const isOpen = item.classList.contains("is-open");

//       // Закриваємо всі інші
//       items.forEach((i) => {
//         i.classList.remove("is-open");
//         i.querySelector(".ac-panel").style.maxHeight = null;
//       });

//       // Якщо панель не була відкрита — відкриваємо її
//       if (!isOpen) {
//         item.classList.add("is-open");
//         const panel = item.querySelector(".ac-panel");
//         panel.style.maxHeight = panel.scrollHeight + "px";
//       }
//     });
//   });
// });
