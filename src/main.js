import "@style/main.scss";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },
});
