const swiper = new Swiper(".representation", {
  direction: "horizontal",
  loop: true,

  slidesPerView: 4,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  },

  autoplay: {
    delay: 1000,
  },

  pagination: {
    el: ".representation .swiper-pagination",
  },
});
