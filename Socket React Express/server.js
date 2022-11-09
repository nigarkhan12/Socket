const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io = new Server(expressServer);

app.get('/express-server', function (req, res) {
    res.end("This is my Backend Server");
})

io.on('connection', function (socket) {
    console.log("New User Connected!");

    socket.on('disconnect', function () {
    console.log("User Disconnected");
})
})




expressServer.listen(5500, function(){
    console.log("Server is now running at port 5500");

})
