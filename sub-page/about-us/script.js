const toggleElement = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const responsiveMenu = document.querySelector(".responsive-menu");
const close = document.querySelector(".close-btn");

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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
