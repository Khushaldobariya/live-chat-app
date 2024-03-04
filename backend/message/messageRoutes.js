import express from "express"
import { getMessage, sendMessage } from "./messageController.js";
import protectRouts from "../midderware/protectRoute.js";

const router = express.Router()

console.log("user+++++++++")

router.post("/sendMessage/:id",protectRouts,sendMessage)
router.get("/:id",protectRouts,getMessage)

export default router;