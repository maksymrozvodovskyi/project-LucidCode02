document.addEventListener('DOMContentLoaded', function () {
  const evenRows = document.querySelectorAll('.row--even');
  const oddRows = document.querySelectorAll('.row--odd');
  const section = document.querySelector('.section-covers');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        evenRows.forEach(row => row.classList.add('animate'));
        oddRows.forEach(row => row.classList.add('animate'));
      } else {
        evenRows.forEach(row => row.classList.remove('animate'));
        oddRows.forEach(row => row.classList.remove('animate'));
      }
    });
  }, observerOptions);

  if (section) {
    observer.observe(section);
  }
});
