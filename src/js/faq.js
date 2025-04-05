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
