import express from "express";
import { register, login, logout, googleAuth } from "../controllers/auth.controller.js";
import { localVariables } from "../middleware/jwt.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

//GOOGLE AUTH
router.post("/google", googleAuth)

//OTP 
router.get("/otp", localVariables)


export default router;