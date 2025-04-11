document.addEventListener('DOMContentLoaded', function () {
  const section = document.querySelector('.covers');
  const evenRows = document.querySelectorAll('.row--even');
  const oddRows = document.querySelectorAll('.row--odd');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          evenRows.forEach(row => row.classList.add('animate'));
          oddRows.forEach(row => row.classList.add('animate'));
        } else {
          evenRows.forEach(row => row.classList.remove('animate'));
          oddRows.forEach(row => row.classList.remove('animate'));
        }
      });
    },
    { threshold: 0.3 }
  );

  if (section) {
    observer.observe(section);
  }
});
