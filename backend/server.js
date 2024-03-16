import express from "express";
import dotenv from "dotenv";
import authRoute from "./Auth/authRoutes.js";
import userRoute from "./user/userRoutes.js";
import messageRoute from "./message/messageRoutes.js";
import contectTomongoDB from "../db/contactToMongoDB.js";
import cookieparser from "cookie-parser"
import {app, server} from "./message/sokect/sokect.js";

const PORT = process.env.PORT || 5000;

app.use(cookieparser())
dotenv.config()

app.use(express.json()); 
app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/api/auth", authRoute);
app.use("/api/message" , messageRoute)
app.use("/api/user" , userRoute)

server.listen(PORT, () => {
    contectTomongoDB();
  console.log(`Server Starting At PORT ${PORT}`);
});
