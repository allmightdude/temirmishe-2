let faq = document.querySelectorAll(".faq__question");

faq.forEach((q) => {
  q.addEventListener("click", () => {
    faq.forEach((item) => item.parentElement.classList.remove("active"));
    q.parentElement.classList.add("active");
  });
});

// carousel

$(document).ready(function () {
  $(".representation").owlCarousel({
    items: 4,
    rtl: true,
    nav: false,
    loop: true,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      800: {
        items: 4,
        nav: false,
      },
    },
  });

  $("aside > .reviewPannel").owlCarousel({
    items: 1,
    rtl: true,
    nav: true,
    loop: true,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
  });

  $(".reviewPannel > .wrapper").owlCarousel({
    items: 1,
    rtl: true,
    nav: true,
    loop: true,
    dots: false,
    touchDrag: true,
    mouseDrag: true,
  });
});

// SIDENAV
document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".sidenav").style.opacity = 1;
  document.querySelector(".sidenav").style.transform = "translateX(0)";
});

document.querySelector(".sidenav .close-icon").addEventListener("click", () => {
  document.querySelector(".sidenav").style.opacity = 0;
  document.querySelector(".sidenav").style.transform = "translateX(100%)";
});

document.querySelector(".btn-toTop").addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let popup = document.querySelector(".popuop-flash");

async function submitForm(e) {
  document.querySelector(".loader-form").style.display = "flex";

  let form = e.target.parentElement;
  let data = new FormData(form);

  let result = await axios.post("http://localhost:8080", {
    fullName: data.get("fullName"),
    phoneNumber: data.get("phoneNumber"),
    description: data.get("description"),
  });
  console.log(result.data);

  if (result) {
    popup.innerHTML = result.data.msg;

    if (result.data.success) {
      popup.classList.add("success");
    } else {
      popup.classList.add("danger");
    }

    document.querySelector(".loader-form").style.display = "none";
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
  }

  setTimeout(() => {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
  }, 3000);
}

// document.querySelector('.review__button')
//     .addEventListener('click' , () => {
//         document.querySelector('.review__create').classList.add('active');
//         document.querySelector('.review__button').classList.add('hide')
//     })

document
  .querySelector(".review__button")
  .addEventListener("click", function () {
    document.querySelector(".review__create").classList.add("active");
  });

document
  .querySelector(".review__create .close-icon")
  .addEventListener("click", () => {
    document.querySelector(".review__create").classList.remove("active");
  });

// stars
let stars = document.querySelectorAll(".reviewPannel__stars .star-o-icon");
let starValue = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    starValue = star.getAttribute("value");

    for (let i = 0; i < starValue; i++) {
      stars[
        i
      ].innerHTML = `<svg class="star-icon" value = ${i}><use xlink:href="images/sprite.svg#icon-star1"></use></svg>`;
    }
    console.log(starValue);
  });
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

async function sendReview(e) {
  document.querySelector(".loader-form").style.display = "flex";

  let form = e.target.parentElement;
  let data = new FormData(form);

  if (!validateEmail(data.get("email"))) {
    document.querySelector(".loader-form").style.display = "none";

    popup.innerHTML = "یک ایمیل معتبر وارد کنید.";
    popup.classList.add("danger");

    popup.style.opacity = 1;
    popup.style.visibility = "visible";

    setTimeout(() => {
      popup.style.opacity = 0;
      popup.style.visibility = "hidden";
    }, 3000);

    return;
  } else {
    console.log("oh cool");
  }

  let result = await axios.post("http://localhost:8080/review", {
    fullName: data.get("fullName"),
    email: data.get("email"),
    location: data.get("location"),
    description: data.get("description"),
    stars: starValue,
  });

  if (result) {
    popup.innerHTML = result.data.msg;

    if (result.data.success) {
      popup.classList.add("success");
    } else {
      popup.classList.add("danger");
    }

    document.querySelector(".loader-form").style.display = "none";
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
  }

  setTimeout(() => {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
  }, 3000);

  console.log(result.data);
}
