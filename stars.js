const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");


let stars = [];

let w;
let h;


function resize(){

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

}


resize();

window.addEventListener("resize", resize);



const count = window.innerWidth < 700 ? 80 : 180;



class Star {

    constructor(){

        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.size = Math.random() * 2 + 0.4;

        this.speed = Math.random() * 0.35 + 0.05;

        this.opacity = Math.random();

        this.change = Math.random() * 0.02 + 0.005;

    }



    update(){

        this.y -= this.speed;


        this.opacity += this.change;


        if(this.opacity >= 1 || this.opacity <= 0.2){

            this.change *= -1;

        }


        if(this.y < -10){

            this.y = h + 10;

            this.x = Math.random() * w;

        }

    }



    draw(){

        ctx.beginPath();


        ctx.arc(

            this.x,

            this.y,

            this.size,

            0,

            Math.PI * 2

        );


        ctx.shadowBlur = 20;

        ctx.shadowColor = "#a855ff";


        ctx.fillStyle =
        `rgba(255,255,255,${this.opacity})`;


        ctx.fill();


        ctx.shadowBlur = 0;


    }


}



for(let i = 0; i < count; i++){

    stars.push(new Star());

}



function animate(){


    ctx.clearRect(

        0,

        0,

        w,

        h

    );



    stars.forEach(star => {

        star.update();

        star.draw();

    });



    requestAnimationFrame(animate);


}



animate();
