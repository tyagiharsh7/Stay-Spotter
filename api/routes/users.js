import express from "express";
import {
    handleGetUsers,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../middlewares/authMiddleware.js";
import { validateUser } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
    .get('/', verifyAdmin, handleGetUsers)
    .get('/:id', verifyUser, handleGetUser)
    .put("/:id", validateUser, verifyUser, handleUpdateUser)
    .delete("/:id", verifyUser, handleDeleteUser);

export default router;
