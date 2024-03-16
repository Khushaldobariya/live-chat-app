import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const userSokectMap = {}; // {userId ,socketId}

export const getReceiverSocketId =(receiverId) => {
return userSokectMap[receiverId];
}

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user conection", socket.id);
 const userId = socket.handshake.query.userId;
 console.log('+++++++++ userId ++++++++++++', userId)
  if (userId != "undefined") userSokectMap[userId] = socket.id;
  // io.emit() is user to listion and events to all connected slients
  io.emit("getOnlineUser", Object.keys(userSokectMap));
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  delete userSokectMap[userId];
  io.emit("getOnlineUser", Object.keys(userSokectMap));

  });
});

export { app, io, server };
