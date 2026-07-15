const canvas = document.getElementById("stars-canvas");

const ctx = canvas.getContext("2d");


let stars=[];

let width;
let height;


function resize(){

width = canvas.width = window.innerWidth;

height = canvas.height = window.innerHeight;

}


window.addEventListener("resize",resize);

resize();



let amount = window.innerWidth < 600 ? 70 : 150;



class Star{


constructor(){

this.x=Math.random()*width;

this.y=Math.random()*height;

this.size=Math.random()*2+0.5;

this.speed=Math.random()*0.4+0.1;

this.alpha=Math.random();

}



update(){

this.y-=this.speed;


if(this.y<0){

this.y=height;

this.x=Math.random()*width;

}

this.alpha += (Math.random()-0.5)*0.03;


if(this.alpha<0.2)
this.alpha=0.2;


if(this.alpha>1)
this.alpha=1;


}



draw(){


ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);


ctx.shadowBlur=15;

ctx.shadowColor="#a855ff";


ctx.fillStyle=
`rgba(255,255,255,${this.alpha})`;


ctx.fill();


ctx.shadowBlur=0;


}

}



for(let i=0;i<amount;i++){

stars.push(new Star());

}



function animate(){

ctx.clearRect(0,0,width,height);


stars.forEach(star=>{

star.update();

star.draw();

});


requestAnimationFrame(animate);

}



animate();
