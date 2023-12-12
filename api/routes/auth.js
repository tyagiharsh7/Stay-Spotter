import express from "express";
import {
    handleRegisterUser,
    handleLoginUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", handleRegisterUser).get("/login", handleLoginUser);

export default router;
