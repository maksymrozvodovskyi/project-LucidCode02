import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: true,
  openOnInit: [0],
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
// const accordion = new Accordion('.accordion-container');
// accordion.open(0);

