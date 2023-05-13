let button = document.querySelector("#add-to-list");
button.addEventListener("click", ValuePasser);
function ValuePasser() {
  let content = document.querySelector("textarea");
  let tittle = document.querySelector("input");
  if (tittle.value.trim() == "") {
    alert("Give any tittle to add");
    return;
  }
  let tleVal = tittle.value.trim();
  let cntVal = content.value.trim();
  let Finaloutput = JSON.parse(localStorage.getItem("output")) || [];
  Finaloutput.push({ title: tleVal, content: cntVal });
  localStorage.setItem("output", JSON.stringify(Finaloutput));
  content.value = "";
  tittle.value = "";
  window.location.href = "index.html";
}
