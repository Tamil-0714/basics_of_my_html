const textToType = `In a realm of pixels and algorithms, there was a coder named WarmFire. Armed with a keyboard and a dream, WarmFire crafted lines of code that danced across the screen. From sunrise to sunset, WarmFire delved into the digital abyss, overcoming bugs and unraveling complexities. With each program completed, the world became a little more connected, a little more efficient. Through dedication and innovation, WarmFire transformed imagination into reality, leaving an indelible mark on the digital tapestry. And in the end, WarmFire's legacy lived on, inspiring a new generation of coders to embrace the power of their fingertips. `;
const imageUrls = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const imageUrls2 = ["F1.jpg", "F2.jpg", "F3.jpg", "F4.jpg", "F5.jpg", "F6.jpg"];

var images = [];
var loadedImages = 0;

function preloadImages() {
  var promises = [];
  for (var i = 0; i < imageUrls.length; i++) {
    var imagePromise = new Promise(function (resolve, reject) {
      var image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = `../img/${imageUrls[i]}`;
      images.push(image);
    });
    promises.push(imagePromise);
  }

  return Promise.all(promises);
}
function changeBackground(index) {
  if (index >= 0 && index < imageUrls.length) {
    var imageUrl = imageUrls[index];
    var imageUrl2 = imageUrls2[index];
    const container = document.querySelector(".container");
    const imgCircle = document.querySelector(".img-circle");

    container.style.backgroundImage = `url("../img/${imageUrl}")`;
    container.style.backgroundPosition = "center";
    container.style.backgroundAttachment = "fixed";
    container.style.backgroundRepeat = "no-repeat";

    imgCircle.style.backgroundImage = `url('../img/${imageUrl2}')`; 
  }
}

const typingTextElement = document.querySelector(".typing-text");

function typeText(text, element, delay) {
  return new Promise(function (resolve) {
    let index = 0;
    const typingInterval = setInterval(() => {
      element.innerHTML += text[index];
      index++;
      if (index === text.length) {
        changeBackground(1);
        clearInterval(typingInterval);
        resolve();
      }
    }, delay);
  });
}

async function startTyping() {
  await typeText(textToType, typingTextElement, 5);
  await preloadImages();
  var currentIndex = 2;
  setInterval(function () {
    changeBackground(currentIndex);
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }, 3000);
}

window.onload = startTyping;
