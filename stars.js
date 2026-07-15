const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");


let stars = [];

let width;
let height;



function resize(){

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}


window.addEventListener("resize", resize);

resize();



const amount = window.innerWidth < 700 ? 80 : 180;



class Star {


    constructor(){

        this.reset();

    }



    reset(){

        this.x = Math.random() * width;

        this.y = Math.random() * height;

        this.size = Math.random() * 2 + 0.3;

        this.speed = Math.random() * 0.35 + 0.05;

        this.opacity = Math.random();

        this.fade = Math.random() * 0.02 + 0.005;


    }



    update(){


        this.y -= this.speed;


        this.opacity += this.fade;



        if(this.opacity >= 1 || this.opacity <= 0.2){

            this.fade *= -1;

        }



        if(this.y < -10){

            this.y = height + 10;

            this.x = Math.random() * width;

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



        ctx.shadowBlur = 15;

        ctx.shadowColor = "#a855ff";



        ctx.fillStyle =

        `rgba(255,255,255,${this.opacity})`;



        ctx.fill();



        ctx.shadowBlur = 0;


    }


}



for(let i = 0; i < amount; i++){

    stars.push(new Star());

}



function animate(){


    ctx.clearRect(

        0,

        0,

        width,

        height

    );



    stars.forEach(star => {

        star.update();

        star.draw();

    });



    requestAnimationFrame(animate);


}



animate();
