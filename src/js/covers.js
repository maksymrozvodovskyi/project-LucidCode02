document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.getElementById('covers');
  const coversList = document.querySelector('.covers-list');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          coversList.style.transform = 'translateX(0)';
        } else {
          coversList.style.transform = 'translateX(100%)';
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(coversSection);
});
