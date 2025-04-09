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
});


