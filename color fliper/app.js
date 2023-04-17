let bg = document.querySelector("body");
let btn = document.querySelector(".btn")
let hexValue = document.querySelector(".hex-code");
btn.addEventListener("click" ,setColor);
let color;
function setColor(){
    let code = HexGendrator()
    hexValue.innerHTML = code;
    bg.style.background = code;
}
let colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
function HexGendrator(){
    let hexCode = "#";

    for( let i=0; i<6; i++){
        hexCode +=colors[randHex()];
    }
    return hexCode;
}
function randHex(){
    return Math.floor (Math.random()*16);
}