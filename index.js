let hex=document.getElementById("hexbtn");
let rgb=document.getElementById("rgbbtn");
let hsl=document.getElementById("hslbtn");
let body=document.body;
console.log(body);


hex.addEventListener("click",changehexcolor);
function changehexcolor(){
    let hex=Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor=`#${hex}`;
    console.log(hex);
}
rgb.addEventListener("click",changergbcolor);
function changergbcolor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    body.style.backgroundColor=`rgb(${red},${green},${blue})`;
}
hsl.addEventListener("click",changehslcolor);
function changehslcolor(){
    let hue=Math.floor(Math.random()*360);
    let saturation=Math.floor(Math.random()*101);
    let lightness=Math.floor(Math.random()*101);
    body.style.backgroundColor=`hsl(${hue},${saturation}%,${lightness}%)`;
}


