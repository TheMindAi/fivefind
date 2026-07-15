const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");


let stars = [];

let width;
let height;



function resize(){

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}


resize();

window.addEventListener("resize", resize);



const count = window.innerWidth < 700
