import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".accordion-container");
  containers.forEach((container) => {
    new Accordion(container, {
      showMultiple: true,
      closeOthers: false,
    });
  });
  const panels = document.querySelectorAll(".ac");
  panels.forEach((panel) => {
    const trigger = panel.querySelector(".ac-trigger");
    trigger.addEventListener("click", () => {
      panel.classList.toggle("is-open", panel.classList.contains("is-active"));
    });
  });
});