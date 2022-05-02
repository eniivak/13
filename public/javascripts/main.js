import {setupSockets} from "./sockets.js" ;
/*const canvasScreen = document.getElementById('lienzo');
const contextScreen= canvasScreen.getContext('2d');
const canvasSquare = document.getElementById('square');
const contextSquare= canvasSquare.getContext('2d');*/
//window.onload = setupSockets;
var x=0;
var y=0;

window.onload= function(){
    //setupSockets;
    var canvas = document.getElementById("lienzo");
    var context = canvas.getContext("2d");
    crearImagen(context);

    pintarTexto(context)

}
window.addEventListener("keydown", listener, false);
function listener(e){
    const keyName= e.key;
    if ((keyName== "ArrowLeft" || keyName== "ArrowRight" || keyName == "ArrowUp" || keyName == "ArrowDown") && this.x>=0 && this.y >=0 && this.x<=document.getElementById("lienzo").width && this.y<=document.getElementById("lienzo").height){
        moverCuadrado(document.getElementById("lienzo"),document.getElementById("lienzo").getContext("2d"),keyName);
    }
    else if(this.x<0){
        this.x=0
    }
    else if(this.y<0){
        this.y=0
    }
    else if(this.x>document.getElementById("lienzo").width){
        this.x=document.getElementById("lienzo").width
    }
    else if(this.y<document.getElementById("lienzo").height){
        this.y=document.getElementById("lienzo").height
    }

}



function pintarTexto(context){
    context.font="bold 10px sans-serif"
    context.textBaseline="top"
    context.fillText("("+this.x+", "+this.y+")", 415,4)
    context.fillStyle = '#ff0000';
    context.stroke();
}
function crearImgzoom(image,context){

    context.drawImage(image,
        this.x, this.y,   // Start at 70/20 pixels from the left and the top of the image (crop),
        28,36,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
        480,0,        // Place the result at 0, 0 in the canvas,
        2*28, 2*36);


}

function crearImagen(context) {

    var logo = new Image();
    logo.src = "images/spritesheet.png";
    logo.onload = function() {
        context.drawImage(logo,0,0,470,500);
        crearcuadrado(context);
        crearImgzoom(logo,context);
    };

}



function crearcuadrado(context){

    //DIBUJAR CUADRADO
    context.beginPath();
    context.moveTo(this.x,this.y);
    context.lineTo(x+28,y);

    context.moveTo(this.x+28,this.y);
    context.lineTo(this.x+28,this.y+36);

    context.moveTo(this.x+28,this.y+36);
    context.lineTo(this.x,this.y+36);

    context.moveTo(this.x,this.y+36);
    context.lineTo(this.x,this.y);
    context.lineWidth = 1;
    context.strokeStyle = '#ff0000';
    context.stroke();
    pintarTexto(context)
}

function moverCuadrado(canvas,context,keyName){
    //para que cuando presiones las flechas se mueva el cuadro

    if (keyName== "ArrowLeft"){
        //x=x-- y=y
        // borrar(canvas,context)
        this.x=this.x-2
        crearImagen(context)

    }
    else if(keyName== "ArrowRight" ){
        //x=x++ y=y
        // borrar(canvas,context)
        this.x=this.x+2
        crearImagen(context)

    }
    else if(keyName == "ArrowUp"){
        //x=x y=y--
        // borrar(canvas,context)
        this.y=this.y-2
        crearImagen(context)

    }
    else if(keyName == "ArrowDown"){
        //x=x y=y++
        // borrar(canvas,context)
        this.y=this.y+2
        crearImagen(context)

    }

}

function borrar(canvas, context){
    context.clearRect(this.x, this.y,28,36);
}