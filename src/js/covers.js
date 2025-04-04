// document.addEventListener('DOMContentLoaded', () => {
//   const coversSection = document.getElementById('covers');
//   const coversList = document.querySelector('.covers-list');

//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           coversList.style.transform = 'translateX(0)';
//         } else {
//           coversList.style.transform = 'translateX(100%)';
//         }
//       });
//     },
//     { threshold: 0.3 }
//   );

//   observer.observe(coversSection);
// });

const section = document.querySelector('.section-covers');
const covers = document.querySelectorAll('.cover');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        covers.forEach((cover, i) => {
          cover.style.animation = `marqueeLine 12s ease-in-out infinite ${
            i * 0.1
          }s`;
        });
        observer.unobserve(section);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(section);
