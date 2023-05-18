let x = 1;
document.querySelector(".result-btn").addEventListener("click" ,()=>{
    // let x = Math.ceil(  Math.random()*5)
    const dNo = document.querySelector(".d-no");
    if(dNo.value == '') return ;
    document.querySelector(".gp-wrapper").innerHTML = `<img src="images/${x}.png" alt="Naakku" class="nakku" />`
    document.querySelector(".nakku").style.display = 'block'
    console.log("hellow");
    x++;
    if(x>5) x = 1;
})