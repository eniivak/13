
//export function setupSockets(){
window.onload=function (){
        const serverURL = window.location.hostname + ":" +  window.location.port;

        const socket = io.connect(serverURL, {secure: true});
        console.log(serverURL)
        socket.onmessage = function(event) {
            console.log("Respuesta: " + event.data);
        }
        socket.emit("desktop-connect")
        socket.on("phone-move",function (data){
            console.log("como sea esto me arranco los pelos");
            console.log(data);
            if(data>0){ //derecha
                console.log("derecha")
                window.dispatchEvent(
                    new KeyboardEvent("keydown",{
                        key:"ArrowRight"
                    })
                )
            }

            if(data<0){ //izquierda
                console.log("izquierda")
                window.dispatchEvent(
                    new KeyboardEvent("keydown",{
                        key:"ArrowLeft"
                    })
                )
            }

        });

}
