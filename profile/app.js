window.onload=()=>{
  let cities = JSON.parse(localStorage.getItem("output")) || [] ;
  cities.forEach((x) => addCity(x));
}
let selected = [];
function addCity(city) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML += `
        <div class="city">
          <input type="checkbox" id="${city}" />
          <label for="${city}">${escapeHTML(city)}</label>
        </div>
`;

  function escapeHTML(html) {
    const text = document.createTextNode(html);
    const div = document.createElement("div");
    div.appendChild(text);
    return div.innerHTML;
  }

  const ckeckBoxes = document.querySelectorAll("input[type='checkbox']");
  ckeckBoxes.forEach((x) => {
    x.addEventListener("change", () => {
      const ThisParrent = x.parentNode;
      if (x.checked) {
        if (!selected.includes(ThisParrent)) selected.push(ThisParrent);
        // const dlbtn = document.createElement("button");
        // dlbtn.innerHTML = "delete";
        // ThisParrent.appendChild(dlbtn);
        // dlbtn.addEventListener("click", () => (ThisParrent.remove()));
      } else {
        if (selected.includes(ThisParrent)) {
          const index = selected.indexOf(ThisParrent);
          if (index !== -1) {
            selected.splice(index, 1);
          }
        }
        const removebtn = ThisParrent.querySelector("button");
        removebtn.remove();
      }
    });
  });
}
document.querySelector(".add-city").addEventListener("click", () => {
  const newCity = document.querySelector(".new-city");
  if (newCity.value.trim() !== "") {
    addCity(newCity.value);
    newCity.value = "";
  }
});
document.querySelector(".del-selected").addEventListener('click',()=>{
    selected.forEach(x=>{
        x.remove();
    })
})
