document.addEventListener("DOMContentLoaded", function() {
  const carousels = document.querySelectorAll('.carousel-wrapper');

  carousels.forEach(function(wrapper) {
    const container = wrapper.querySelector('.carousel-container');
    const inner = container.querySelector('.carousel-inner');
    const items = inner.querySelectorAll('li');
    const dotsContainer = wrapper.querySelector('.carousel-dots');

    let visibleCount = window.innerWidth <= 768 ? 2 : 3;
    const totalItems = items.length;
    let totalSlides = Math.ceil(totalItems / visibleCount);
    let currentSlide = 0;
    const GAP = 48;


    function createDots() {
      dotsContainer.innerHTML = '';
      totalSlides = Math.ceil(totalItems / visibleCount);
      for (let i = 0; i < totalSlides; i++) {
        const btn = document.createElement('button');
        if (i === currentSlide) btn.classList.add('active');
        btn.addEventListener('click', function() {
          currentSlide = i;
          updateCarousel();
        });
        dotsContainer.appendChild(btn);
      }
    }

    function updateCarousel() {
      const offset = currentSlide * (container.offsetWidth + GAP);
      inner.style.transform = 'translateX(-' + offset + 'px)';
      dotsContainer.querySelectorAll('button').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    createDots();
    updateCarousel();

    window.addEventListener('resize', function() {
      visibleCount = window.innerWidth <= 768 ? 2 : 3;
      totalSlides = Math.ceil(totalItems / visibleCount);
      if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1;
      }
      createDots();
      updateCarousel();
    });
  });
});
