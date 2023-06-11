const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { faker } = require('@faker-js/faker');


const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173"]
  }
});

function generateRandomdata(){
  const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
return {
  name:randomName,
  email:randomEmail
}
}

io.on("connection", (socket) => {
    console.log("Client connected");

  //  

  socket.on("realtime",(data)=>{
    setInterval(()=>{
    
      socket.emit("message",  generateRandomdata());
    },2000)
  
  })
 
});

httpServer.listen(8080);