import express from "express"
import protectRouts from "../midderware/protectRoute.js";
import { getUserList } from "./userController.js";


const router = express.Router();

router.get('/' ,protectRouts,getUserList)

export default router;