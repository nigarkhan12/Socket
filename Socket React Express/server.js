const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io = new Server(expressServer);

const path = require('path');

app.use(express.static('client/build'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.get('/express-server', function (req, res) {
    res.end("This is my Backend Server");
})

io.on('connection', function (socket) {
    console.log("New User Connected!");

    setTimeout(function () {
        socket.emit('msg', "This is message from express server")
    }, 2000);

    socket.on('disconnect', function () {
    console.log("User Disconnected");
})
})




expressServer.listen(5500, function(){
    console.log("Server is now running at port 5500");

})
