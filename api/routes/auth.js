import express from "express";
import {
    handleRegisterUser,
    handleLoginUser,
} from "../controllers/authController.js";
import { validateUser, validateUserRegistration } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
    .post("/register", validateUserRegistration, handleRegisterUser)
    .post("/login", validateUser, handleLoginUser);

export default router;
