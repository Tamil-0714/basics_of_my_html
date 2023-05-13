/*  <div class="box-content">
        <p><b>jinjljljni</b> <br> jijnjinjn</p>
    </div>
*/

let content = localStorage.getItem("selected");
// console.log(content)
let newDiv = document.createElement("div");
newDiv.className = "box";
newDiv.innerHTML = content;
// console.log(newDiv)
let tit = newDiv.querySelector("b");
let context = newDiv.querySelector("p");
let newcontext = context.textContent
  .replace(context.querySelector("b").textContent, "")
  .trim();
let tittle = tit.innerText;
// console.log(tittle)
document.querySelector(".tittle").value = tittle;
// console.log(newcontext)
document.querySelector(".context").value = newcontext;

let removeItem = { title: tittle, content: newcontext };

function removeEle() {
  let allList = JSON.parse(localStorage.getItem("output"));
  // console.log(allList);
  allList = allList.filter(
    (obj) => JSON.stringify(obj) !== JSON.stringify(removeItem)
  );
  // console.log(removeItem);
  localStorage.setItem("output", JSON.stringify(allList));
  // console.log(allList);
  window.location.href = "index.html";
}
function replaceEle() {
  let newTittle = document.querySelector("input").value.trim();
  if(newTittle ==''){
          alert("give some tittle");
          return;
  }
  let newTextarea = document.querySelector("textarea").value.trim();
  let myArray = JSON.parse(localStorage.getItem("output")) || [];
  let existingItem = { title: tittle, content: newcontext };
  let newItem = { title: newTittle, content: newTextarea };
  let index = myArray.findIndex(
    (obj) =>
      obj.title === existingItem.title && obj.content === existingItem.content
  );
  if (index !== -1) {
    myArray.splice(index, 1, newItem);
  }
  localStorage.setItem("output", JSON.stringify(myArray));
  window.location.href = "index.html";
}
