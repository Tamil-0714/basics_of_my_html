const textToType = `In a realm of pixels and algorithms, there was a coder named WarmFire. Armed with a keyboard and a dream, WarmFire crafted lines of code that danced across the screen. From sunrise to sunset, WarmFire delved into the digital abyss, overcoming bugs and unraveling complexities. With each program completed, the world became a little more connected, a little more efficient. Through dedication and innovation, WarmFire transformed imagination into reality, leaving an indelible mark on the digital tapestry. And in the end, WarmFire's legacy lived on, inspiring a new generation of coders to embrace the power of their fingertips. `;
const imageUrls = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
];
const imageUrls2 = [
  "F1.jpg",
  "F2.jpg",
  "F3.jpg",
  "F4.jpg",
  "F5.jpg",
  "F6.jpg",
  "F7.jpg",
  "F8.jpg",
  "F9.jpg",
  "F10.jpg",
  "F11.jpg",
  "F12.jpg",
  "F13.jpg",
  "F14.jpg",
  "F15.jpg"
];

let images = [];
let loadedImages = 0;
let typed = new Typed(".near-name", {
  strings: [
    "Tyrannosaurus Rex",
    "Velociraptor",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Diplodocus",
    "Allosaurus",
    "Ankylosaurus",
    "Pterodactyl",
    "Spinosaurus",
    "Apatosaurus",
    "Iguanodon",
    "Carnotaurus",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
var quotes = [
  `"Resting is not idleness; it's a chance to rejuvenate."`,
  `"Taking a breather allows for greater leaps forward."`,
  `"Sometimes, stillness can be the most productive state."`,
  `"Embracing leisure recharges the soul and sparks creativity."`,
  `"Unwinding paves the way for inspiration to unfold."`,
  `"Moments of calm fuel the fire of future achievements."`,
  `"Recharging the mind is an essential investment in oneself."`,
  `"Finding balance means knowing when to pause and replenish."`,
  `"Embracing the pause cultivates a deeper sense of purpose."`,
  `"Granting oneself respite lays the foundation for greatness."`,
];

var idx = 0;
var isTextChanging = false;
var headElement = document.querySelector("#head");

document.querySelector(".img-circle").addEventListener("dblclick", function () {
  if (!isTextChanging) {
    isTextChanging = true;
    console.log("Hello");
    headElement.innerHTML = "";
    typeText(quotes[idx], headElement, 50);
    idx++;
    if (idx >= quotes.length) idx = 0;

    setTimeout(function () {
      isTextChanging = false;
    }, 3000); // Add a delay to prevent immediate re-triggering
  }
});
let titles = ["-Be the char of yourself", "-To the stars of Jupiter"];
let idx2 = 0;
let headTitle = document.querySelector(".center-head");
document
  .querySelector(".orange-cicrcle")
  .addEventListener("dblclick", function () {
    console.log("Hello");
    headTitle.innerHTML = "";
    typeText(titles[idx2], headTitle, 100);
    idx2++;
    if (idx2 >= titles.length) idx2 = 0;
  });

function preloadImages() {
  let promises = [];
  for (var i = 0; i < imageUrls.length; i++) {
    let imagePromise = new Promise(function (resolve, reject) {
      let image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = `../img/${imageUrls[i]}`;
      images.push(image);
    });
    promises.push(imagePromise);
  }

  for (let i = 0; i < imageUrls2.length; i++) {
    let imagePromise2 = new Promise(function (resolve, reject) {
      let image2 = new Image();
      image2.onload = resolve;
      image2.onerror = reject;
      image2.src = `../img/${imageUrls2[i]}`;
      images.push(image2);
    });
    promises.push(imagePromise2);
  }

  return Promise.all(promises);
}
function changeBackground(index) {
  if (index >= 0 && index < imageUrls.length) {
    let imageUrl = imageUrls[index];
    let imageUrl2 = imageUrls2[index];
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
        clearInterval(typingInterval);
        resolve();
      }
    }, delay);
  });
}

async function startTyping() {
  await typeText(textToType, typingTextElement, 5);
  await preloadImages();
  let currentIndex = 2;
  changeBackground(1);
  setInterval(function () {
    changeBackground(currentIndex);
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }, 3000);
}

window.onload = startTyping;
