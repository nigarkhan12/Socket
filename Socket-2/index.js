const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io = new Server(expressServer);

io.on('connection', function(socket){
    socket.on('chat', function (msg) {
        console.log(msg);
    })
})

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(3000, function(){
    console.log("Server is now running at port 3000");

})
