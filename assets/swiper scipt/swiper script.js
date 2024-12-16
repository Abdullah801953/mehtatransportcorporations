var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 70,
  autoplay: {
    delay: 3000, // Time between slides (in milliseconds)
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 5, // Show 4 slides
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 3, // Show 2 slides
    },
    // When window width is < 480px
    0: {
      slidesPerView: 1, // Show 1 slide
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: false,
  },
});
