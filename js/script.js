const toggleElement = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const responsiveMenu = document.querySelector(".responsive-menu");
const close = document.querySelector(".close-btn");
const pOne = document.querySelector(".p-one");
const pTwo = document.querySelector(".p-two");
const pThree = document.querySelector(".p-three");
const collapseContent = document.querySelector(".collapse-content");

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

// collapse
pOne.addEventListener("click", () => {
  collapseContent.innerHTML =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان";
  pTwo.classList.remove("active");
  pThree.classList.remove("active");
  pOne.classList.add("active");
});
pTwo.addEventListener("click", () => {
  collapseContent.innerHTML =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابها شناخت فراوان";
  pTwo.classList.add("active");
  pThree.classList.remove("active");
  pOne.classList.remove("active");
});
pThree.addEventListener("click", () => {
  collapseContent.innerHTML =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان";
  pTwo.classList.remove("active");
  pThree.classList.add("active");
  pOne.classList.remove("active");
});
