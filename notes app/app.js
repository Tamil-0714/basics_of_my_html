let button = document.querySelector("button");
button.addEventListener('click' ,function() {
    let content = document.querySelector("textarea");
    let tittle =  document.querySelector("input");
    // console.log(content.value);
    if(tittle.value==''){
        alert("Pleae give any tittle");
        return;
    }
    addToList(content.value , tittle.value);
    content.value='';
    tittle.value='';
})
addToList =(paraContent , tittleContent) => {
    let listItem = document.createElement("li");
    let para = document.createElement("p");
    para.className = 'content';
    let text;
    if(paraContent==''){
        text = document.createTextNode('undifined');    
    }
    else{
        text = document.createTextNode(paraContent);
    }
    para.appendChild(text);
    listItem.innerHTML = tittleContent;
    listItem.appendChild(para);
    console.log(listItem)
    let myList = document.querySelector(".my-list");
    myList.appendChild(listItem);
    listItem.addEventListener('click' ,()=>{
        // listItem.style.textDecoration = 'line-through'        
        let TIttleValue = listItem.innerText.trim();
        let p = listItem.querySelector('p') ;
        let ContentValue = p.textContent;
        // console.log(TIttleValue)
        // console.log(ContentValue)
        let h3Display = document.querySelector('input[type="text"]');
        let pDisplay = document.querySelector("textarea");
        h3Display.value = TIttleValue;
        pDisplay.value = ContentValue;
        // window.location.href = 'display.html?'
    })
}