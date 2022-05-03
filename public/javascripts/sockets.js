
export function setupSockets(){
    window.onload = function(){

        const serverURL = window.location.hostname + ":" +  window.location.port;
        const socket = io.connect(serverURL, {secure: true});

        socket.on("truco",function (data){
            console.log("como sea esto me arranco los pelos");
            console.log(data);
            if(data>0){ //derecha
                window.dispatchEvent(
                    new KeyboardEvent("keydown",{
                        key:"ArrowRight"
                    })
                )
            }

            if(data<0){ //izquierda
                window.dispatchEvent(
                    new KeyboardEvent("keydown",{
                        key:"ArrowLeft"
                    })
                )
            }

        });

    };


}
