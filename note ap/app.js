window.onload = () => {
  let output = JSON.parse(localStorage.getItem("output")) || [];
  for (let i = 0; i < output.length; i++) {
    let item = output[i];
    let listItem = `
        <div class="card">
          <div class="box-content">
            <p><b>${item.title}</b> <br> ${item.content}</p>
          </div>
        </div>
      `;
    addToTodoList(listItem);
  }
};
function addToTodoList(listItem) {
  let contentBox = document.querySelector(".cards");
  contentBox.insertAdjacentHTML("beforeend", listItem);
}
let selectedDiv;
let div = document.querySelector(".cards");
div.addEventListener("click", (event) => {
  const clickedDiv = event.target.closest(".box-content");
  selectedDiv = clickedDiv.parentElement;
  if (clickedDiv == null) return;
  localStorage.setItem("selected", clickedDiv.outerHTML);
  window.location.href = "display.html";
});

document.querySelector(".dotbtn").addEventListener("click", () => {
  let emptyList = [];
  localStorage.setItem("output", JSON.stringify(emptyList));
  window.location.href = "index.html";
});
