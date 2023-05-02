let button = document.querySelector(".add-button");
button.addEventListener("click", ValuePasser);
let replaceButton = document.querySelector(".replace-button");
replaceButton.addEventListener("click", ReplaceValue);
let deleteButton =  document.querySelector(".del-button");
deleteButton.addEventListener('click',DelCur);
let AllDel = document.querySelector(".del-all-button");
AllDel.addEventListener('click', DeleAll);
let ClickedList;
function ValuePasser() {
  let content = document.querySelector("textarea");
  let tittle = document.querySelector("input");
  // console.log(content.value);
  if (tittle.value == "") {
    alert("Pleae give any tittle");
    return;
  }
  addToList(content.value, tittle.value);
  content.value = "";
  tittle.value = "";
}

addToList = (paraContent, tittleContent) => {
  let listItem = document.createElement("li");
  let para = document.createElement("p");
  para.className = "content";
  let text;
  if (paraContent == "") {
    text = document.createTextNode("undifined");
  } else {
    text = document.createTextNode(paraContent);
  }
  para.appendChild(text);
  listItem.innerHTML = tittleContent;
  listItem.appendChild(para);
  // console.log(listItem)
  let myList = document.querySelector(".my-list");
  myList.appendChild(listItem);
  listItem.addEventListener("click", ValueDisplay);
  function ValueDisplay() {
    // console.log(listItem);
    ClickedList = listItem;
    let TIttleValue = listItem.innerText.trim();
    let p = listItem.querySelector("p");
    let ContentValue = p.textContent;
    let h3Display = document.querySelector('input[type="text"]');
    let pDisplay = document.querySelector("textarea");
    h3Display.value = TIttleValue;
    pDisplay.value = ContentValue;
  }
};
function ReplaceValue(){
    // console.log(ClickedList);
    if(ClickedList==undefined){
        alert("Select something to replace ...!");
        return;
    }
    let curTle = document.querySelector("input").value;
    let curCnt = document.querySelector("textarea").value;
    let replaceText = `${curTle}<p class="content">${curCnt}</p>`;
    ClickedList.innerHTML = replaceText;
    let content = document.querySelector("textarea");
    let tittle = document.querySelector("input");
    content.value = "";
    tittle.value = "";
    ClickedList = undefined;
}
function DelCur(){
    if(ClickedList==undefined){
        alert("Select something to delete ...!");
        return;
    }
    document.querySelector(".my-list").removeChild(ClickedList);
    let content = document.querySelector("textarea");
    let tittle = document.querySelector("input");
    content.value = "";
    tittle.value = "";
}
function DeleAll(){
    if(document.querySelector(".my-list").innerHTML == ''){
        alert("List is alerady empty ...!");
        return;
    }
    document.querySelector(".my-list").innerHTML = '';
}

// const SelectedLi = document.querySelector(".my-list");
// function GetLI() {
//   SelectedLi.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//       //   console.log(event.target);
//       // listItem.innerHTML = replaceText;
//       // console.log(replaceText);
//       console.log(event.target);
//       return event.target;
//     }
//   });
// }
// let replaceButton = document.querySelector(".replace-button");
// replaceButton.addEventListener("click", () => {
//   console.log(GetLI());

// });
