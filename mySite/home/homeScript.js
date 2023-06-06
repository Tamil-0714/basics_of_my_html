const textToType = `In a realm OF pixels and algorithms, there was a coder named WarmFire. Armed with a keyboard and a dream, WarmFire crafted lines of code that danced across the screen. From sunrise to sunset, WarmFire delved into the digital abyss, overcoming bugs and unraveling complexities. With each program completed, the world became a little more connected, a little more efficient. Through dedication and innovation, WarmFire transformed imagination into reality, leaving an indelible mark on the digital tapestry. And in the end, WarmFire's legacy lived on, inspiring a new generation of coders to embrace the power of their fingertips. `;
const imageUrls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

var images = [];
var loadedImages = 0;

function preloadImages() {
  for (var i = 0; i < imageUrls.length; i++) {
    var image = new Image();
    image.src = `../img/` + imageUrls[i];
    image.onload = imageLoaded;
    images.push(image);
  }
}

function imageLoaded() {
  loadedImages++;
  if (loadedImages === imageUrls.length) {
    var currentIndex = 0;
    var interval = setInterval(function () {
      changeBackground(currentIndex);
      currentIndex = (currentIndex + 1) % imageUrls.length; // Move to the next image
    }, 4000); // Change the background every 2 seconds
  }
}

function changeBackground(index) {
  if (index >= 0 && index < imageUrls.length) {
    var imageUrl = imageUrls[index];
    const container = document.querySelector(".container");
    const imgCircle = document.querySelector(".img-circle");
    container.style.backgroundImage = `url("../img/${imageUrl}")`;
    imgCircle.style.backgroundImage = `url('../img/F${imageUrl}')`;
  }
}

preloadImages();


const typingTextElement = document.querySelector(".typing-text");
let changed = false;

function typeText(text, element, delay) {
  let index = 0;
  const typingInterval = setInterval(() => {
    element.innerHTML += text[index];
    index++;
    if (index === text.length) {
      clearInterval(typingInterval);
      preloadImages();
    }
  }, delay);
}

window.onload = function () {
  typeText(textToType, typingTextElement, 5);
};
