const questions = document.querySelectorAll(".faq__question");
const answers = document.querySelectorAll(".faq__answer");

questions.forEach((q) => {
  q.addEventListener("click", function () {
    const isExpanded = q.getAttribute("data-expand") === "true";

    if (!isExpanded) {
      q.setAttribute("data-expand", "true");

      q.nextElementSibling.style.maxHeight = "150px";
    } else {
      q.setAttribute("data-expand", "false");

      q.nextElementSibling.style.maxHeight = "0";
    }
  });
});
