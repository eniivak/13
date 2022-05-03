

let x=0;
let y=0;
const serverURL = window.location.hostname + ":" +  window.location.port;

const socket = io.connect(serverURL, {secure: true});

window.onload= otra();
function otra(){
    var canvas = document.getElementById('lienzo');
    var context = canvas.getContext('2d');
    crearImagen(context);
    pintarTexto(context);
}

window.addEventListener("keydown", listener, false);
function listener(e){
    const keyName= e.key;
    if ((keyName== "ArrowLeft" || keyName== "ArrowRight" || keyName == "ArrowUp" || keyName == "ArrowDown") && x>=0 && y >=0 && x<=document.getElementById("lienzo").width && y<=document.getElementById("lienzo").height){
        moverCuadrado(document.getElementById("lienzo"),document.getElementById("lienzo").getContext("2d"),keyName);
    }
    else if(x<0){
        vibracion();
        x=0
    }
    else if(y<0){
        y=0
    }
    else if(x>438){
        vibracion();
        x=440
    }
    else if(y<document.getElementById("lienzo").height){
        y=document.getElementById("lienzo").height
    }

}
function vibracion(){
    socket.emit("crash")
}

function pintarTexto(context){
    context.font="bold 10px sans-serif"
    context.textBaseline="top"
    context.fillText("("+x+", "+y+")", 415,4)
    context.fillStyle = '#ff0000';
    context.stroke();
}
function crearImgzoom(image,context){

    context.drawImage(image,
        x, y,   // Start at 70/20 pixels from the left and the top of the image (crop),
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
    context.moveTo(x,y);
    context.lineTo(x+28,y);

    context.moveTo(x+28, y);
    context.lineTo(x+28,y+36);

    context.moveTo(x+28,y+36);
    context.lineTo(x,y+36);

    context.moveTo(x,y+36);
    context.lineTo(x,y);
    context.lineWidth = 1;
    context.strokeStyle = '#ff0000';
    context.stroke();
    pintarTexto(context)
}

function moverCuadrado(canvas,context,keyName){
    //para que cuando presiones las flechas se mueva el cuadro

    if (keyName== "ArrowLeft"){
        //x=x-- y=y
        x=x-2
        crearImagen(context)

    }
    else if(keyName== "ArrowRight" ){
        //x=x++ y=y
        if(x<440){
            x=x+2
            crearImagen(context)
        }
        else {
            vibracion()
        }


    }
    else if(keyName == "ArrowUp"){
        //x=x y=y--
        y=y-2
        crearImagen(context)

    }
    else if(keyName == "ArrowDown"){
        //x=x y=y++
        y=y+2
        crearImagen(context)

    }

}

function borrar(canvas, context){
    context.clearRect(x, y,28,36);
}


