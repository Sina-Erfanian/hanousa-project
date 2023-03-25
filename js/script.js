const toggleElement = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const responsiveMenu = document.querySelector(".responsive-menu");
const close = document.querySelector(".close-btn");

let app = document.getElementById("app");

// hamburger menu
toggleElement.addEventListener("click", () => {
  toggleElement.classList.toggle("active");
  navMenu.classList.toggle("active");
  responsiveMenu.classList.toggle("active");
});
close.addEventListener("click", () => {
  toggleElement.classList.toggle("active");
  navMenu.classList.toggle("active");
  responsiveMenu.classList.toggle("active");
});

// TypeWritter

let typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("تایتل اول")
  .pauseFor(1500)
  .deleteAll()
  .typeString("تایتل دوم")
  .pauseFor(1500)
  .deleteAll()
  .typeString("تایتل سوم")
  .pauseFor(1500)
  .start();

//swipper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 50,
    },

    1000: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
