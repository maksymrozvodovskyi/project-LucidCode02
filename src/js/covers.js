document.addEventListener('DOMContentLoaded', function () {
  const evenRows = document.querySelectorAll('.row--even');
  const oddRows = document.querySelectorAll('.row--odd');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        console.log('DOne');
      } else {
        entry.target.classList.remove('animate');
        console.log('DDDDone');
      }
    });
  }, observerOptions);

  evenRows.forEach(row => {
    observer.observe(row);
  });

  oddRows.forEach(row => {
    observer.observe(row);
  });
});
