const scrollTopButton = document.querySelector(".footer__to-top");

const scrollWindow = function () {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 150);
      scrollWindow();
    }, 10);
  }
};

scrollTopButton.addEventListener("click", scrollWindow);
