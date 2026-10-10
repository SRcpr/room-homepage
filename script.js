// navigation menu show/hide
const hamburgerMenu = document.getElementById("hamburger");
const closeButton = document.getElementById("close-button");
const nav = document.querySelector(".nav");

const updateNavigation = (activeState) => {
  activeState === "addNavigation"
    ? nav.classList.add("is-open")
    : nav.classList.remove("is-open");
};
hamburgerMenu.addEventListener("click", () =>
  updateNavigation("addNavigation"),
);
closeButton.addEventListener("click", () =>
  updateNavigation("removeNavigation"),
);
// navigation menu show/hide

// const slider = document.querySelectorAll("article");
// const buttonNext = document.getElementById("btn-next");
// const buttonPrev = document.getElementById("btn-prev");
// let currentIndex = 0;
// const updateSlider = (btn) => {
//   slider[currentIndex].classList.remove("hero__slide--active");
//   if (btn === "next") {
//     currentIndex = (currentIndex + 1) % slider.length;
//   }
//   if (btn === "prev") {
//     currentIndex = (currentIndex - 1 + slider.length) % slider.length;
//   }
//   slider[currentIndex].classList.add("hero__slide--active");
// };
// buttonNext.addEventListener("click", () => updateSlider("next"));
// buttonPrev.addEventListener("click", () => updateSlider("prev"));
