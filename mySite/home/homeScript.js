// Define the text you want to display
const textToType = `In A realm of pixels and algorithms, there was a coder named WarmFire. Armed with a keyboard and a dream, WarmFire crafted lines of code that danced across the screen. From sunrise to sunset, WarmFire delved into the digital abyss, overcoming bugs and unraveling complexities. With each program completed, the world became a little more connected, a little more efficient. Through dedication and innovation, WarmFire transformed imagination into reality, leaving an indelible mark on the digital tapestry. And in the end, WarmFire's legacy lived on, inspiring a new generation of coders to embrace the power of their fingertips. `;
const imageSequence = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; // , "4.jpg", "5.jpg"
// Get the element where the text will be displayed
const typingTextElement = document.querySelector(".typing-text");
let changed = false;
// Function to simulate typing effect
function typeText(text, element, delay) {
  let index = 0;
  const typingInterval = setInterval(() => {
    element.innerHTML += text[index];
    index++;
    if (index === text.length) {
      clearInterval(typingInterval);
      changeBG()
      setInterval(changeBG, 5000);
    }
  }, delay);
}
function changeBG() {
  const container = document.querySelector(".container");
  const imgCircle = document.querySelector(".img-circle");
  const currentImageIndex = parseInt(container.dataset.imageIndex || "0");
  const nextImageIndex = (currentImageIndex + 1) % imageSequence.length;
  container.style.backgroundImage = `url('../img/${imageSequence[nextImageIndex]}')`;
  imgCircle.style.backgroundImage = `url('../img/F${imageSequence[nextImageIndex]}')`;
  container.dataset.imageIndex = nextImageIndex;
}
// Call the typing function when the window loads
window.onload = function () {
  typeText(textToType, typingTextElement, 5); // Adjust the delay value (in milliseconds) to control typing speed
//   setInterval(changeBG, 5000);
};
