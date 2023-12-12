import express from "express";
import {
    handleGetUsers,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/authMiddleware.js";

const router = express.Router();

router
    .get('/', verifyAdmin, handleGetUsers)
    .get('/:id', verifyUser, handleGetUser)
    .put("/:id", verifyUser, handleUpdateUser)
    .delete("/:id", verifyUser, handleDeleteUser);

export default router;
