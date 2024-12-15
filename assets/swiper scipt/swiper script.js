var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 70,
    autoplay: {
      delay: 3000, // Time between slides (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      enabled:false,
    },
  });