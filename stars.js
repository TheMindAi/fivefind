const canvas = document.getElementById("stars-canvas");

const ctx = canvas.getContext("2d");


let stars=[];


function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}


resize();

window.addEventListener("resize",resize);



const count = window.innerWidth < 600 ? 60 : 150;



for(let i=0;i<count;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+0.5,

speed:Math.random()*0.4+0.1,

alpha:Math.random()

});

}



function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(s=>{


s.y-=s.speed;


if(s.y<0){

s.y=canvas.height;

s.x=Math.random()*canvas.width;

}



ctx.beginPath();

ctx.arc(
s.x,
s.y,
s.r,
0,
Math.PI*2
);



ctx.shadowBlur=15;

ctx.shadowColor="#a855ff";


ctx.fillStyle=
`rgba(255,255,255,${s.alpha})`;


ctx.fill();



});



requestAnimationFrame(animate);


}



animate();
