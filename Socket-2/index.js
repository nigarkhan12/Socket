const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');

const expressServer = http.createServer(app);

const {Server}=require('socket.io');
const io = new Server(expressServer);

io.on('connection', function (socket) {
    socket.join('kitchen-room');
    let sizeOfKitchen = io.sockets.adapter.rooms.get('kitchen-room').size;
    io.sockets.in('kitchen-room').emit('cooking', "Fried Rice Cooking = "+ sizeOfKitchen);
    io.sockets.in('kitchen-room').emit('boiling', "Boiling Water");

    socket.join('Bed-room');
    io.sockets.in('Bed-room').emit('sleep', "I am Sleeping");
})

// io.on('connection', function(socket){
//     socket.on('chat', function (msg) {
//         io.emit('chatSend', msg);
//     })
// })

// HTML Script Code
        //  <!-- function sendMsg(){
        //     let msg = document.getElementById('msg').value;
        //     socket.emit('chat', msg);
        //     document.getElementById('msg').value="";
        // <!-- }  -->
        
        // <!-- socket.on('chatSend', function(msg){
        //  let listItem = document.createElement('li');
        // listItem.textContent=msg;
        
        // let msgHistory = document.getElementById('msgHistory');
        // msgHistory.appendChild(listItem);
        // })   

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(3000, function(){
    console.log("Server is now running at port 3000");

})
