import express from "express";
import {
    handleCreateRoom,
    handleGetRooms,
    handleGetRoom,
    handleUpdateRoom,
    handleDeleteRoom,
    handleUpdateRoomAvailability
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/authMiddleware.js";

const router = express.Router();

router
    .get('/', handleGetRooms)
    .get('/:id', handleGetRoom)
    .post("/:hotelId", verifyAdmin, handleCreateRoom)
    .put("/:id", verifyAdmin, handleUpdateRoom)
    .put("/availability/:id", handleUpdateRoomAvailability)
    .delete("/:id", verifyAdmin, handleDeleteRoom);

export default router;
