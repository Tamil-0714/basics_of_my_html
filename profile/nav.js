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
  emptyArea.classList.toggle("target-area");
  empty_area = document.querySelector(".target-area");
}
function removeNav() {
  if (emptyArea) {
    navBar.classList.remove("slide");
    emptyArea.classList.remove("target-area");
  }
}
if (emptyArea) {
  emptyArea.addEventListener("click",removeNav);
}
document.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
  touchStart = event.touches[0].clientX;
});

document.addEventListener("touchend", function (event) {
  touchEndX = event.changedTouches[0].clientX;
  touchEnd = event.changedTouches[0].clientX;

  const slideDistance = touchEndX - touchStartX;
  const slideDistanceRight = touchEnd - touchStart;

  if (slideDistance < -50) {
    removeNav();
  } else if (slideDistanceRight > 50) {
    toggleNav();
  }
});
