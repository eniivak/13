
//var serverURL ="wss://"+ window.location.host+"/desktop.html";
var serverURL ="wss://localhost:8080/desktop.html";
console.log(serverURL)
//var socket = io.connect(serverURL)

console.log("lele")

var socket = new WebSocket(serverURL,"echo-protocol")

socket.send("algo")
console.log(socket)
/*
socket.onopen = function(){
    console.log("Socket conectado!");
}
*/
