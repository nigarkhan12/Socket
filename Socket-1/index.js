const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io = new Server(expressServer);

io.on('connection', function(socket){
    console.log("New user connected");

    // SetTimeout
    // setTimeout(function(){
    //     socket.send("Hello Socket IO (Server to Client)");
    // },10000);

    // Custom Event
    // setInterval(function(){
    //     let date = new Date();
    //     let time = date.getTime();
    //     // socket.send(time);
    //     socket.emit("myEvent",time);
    // },2000);

    // Receive data from Client
    socket.on('message', function(msg){
        console.log(msg);
    })

})

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(3000, function(){
    console.log("Server is now running at port 3000");

})
