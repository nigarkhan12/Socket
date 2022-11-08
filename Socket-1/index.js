const express = require('express');
const app = express();
const http = require('http');

const expressServer = http.createServer(app);

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

expressServer.listen(3000, function(){
    console.log("Server is now running at port 3000");

})
