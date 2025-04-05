document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelectorAll('.section-covers');
  const covers = document.querySelectorAll('.cover');
  const evenRows = document.querySelectorAll('.row--even .cover');
  const oddRows = document.querySelectorAll('.row--odd .cover');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.isIntersecting) {
            covers.forEach(cover => {
              evenRows.forEach(row => cover.classList.add('animate-right'));
              oddRows.forEach(row => cover.classList.add('animate-left'));
              observer.unobserve(entry.target);
              // cover.classList.add('animated');
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  section.forEach(section => observer.observe(section));
});
