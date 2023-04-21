let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn-1");

btn.addEventListener("click", display);
document.addEventListener('keydown',function(event){
    if(event.code ==='Enter'){
        display();
    }
    else if(event.ctrlKey && event.code ==='Backspace'){
        deleteAll();
    }
})

btn2.addEventListener("click", deleteAll);
function display() {
  let data = document.getElementById("input-box").value;
  if (data != "") {
    let list = document.createElement("li");
    let output = document.querySelector(".list");
    list.innerHTML = data;
    list.setAttribute("class", "list-text");
    output.appendChild(list);
    let place = document.getElementById("input-box");
    place.value = "";
  }
}
function deleteAll() {
  const del = document.querySelector(".list");
  let data = document.getElementById("input-box");
  data.value = "";
  while (del.firstChild) {
    del.removeChild(del.firstChild);
  }
}