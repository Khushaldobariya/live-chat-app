import express from 'express';
import { loginUser, logoutUser, userSignUp } from './authController.js';
const router = express.Router()

router.post("/signup" ,userSignUp)
router.post("/login" ,loginUser)
router.post("/logout" ,logoutUser)


export default router;