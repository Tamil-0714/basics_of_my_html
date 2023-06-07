// console.log("content loaded");

const navIcon = document.querySelector(".hamburger");
const navBar = document.querySelector("ul");
const emptyArea = document.querySelector(".empty-area");
let empty_area;
let touchStartX = 0;
let touchEndX = 0;
let touchstart = 0;
let touchEnd = 0;
navIcon.addEventListener("click", toggleNav);
function toggleNav() {
  navBar.classList.toggle("slide");
  document.body.classList.toggle("slide-scroll");
  emptyArea.classList.toggle("target-area");
  empty_area = document.querySelector(".target-area");
}
function removeNav() {
  if (emptyArea) {
    navBar.classList.remove("slide");
    document.body.classList.remove("slide-scroll");
    emptyArea.classList.remove("target-area");
  }
}
if (emptyArea) {
  emptyArea.addEventListener("click",removeNav);
}
document.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", function (event) {
  touchEndX = event.changedTouches[0].clientX;
  const slideDistance = touchEndX - touchStartX;
  if (slideDistance < -50) {
    removeNav();
  } 
  
})
