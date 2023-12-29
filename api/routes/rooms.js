import express from "express";
import {
    handleCreateRoom,
    handleGetRooms,
    handleGetRoom,
    handleUpdateRoom,
    handleDeleteRoom,
    handleUpdateRoomAvailability
} from "../controllers/roomController.js";
import { verifyAdmin } from "../middlewares/authMiddleware.js";
import { validateRoomCreation, validateRoomUpdation } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
    .get('/', handleGetRooms)
    .get('/:id', handleGetRoom)
    .post("/:hotelId", validateRoomCreation, verifyAdmin, handleCreateRoom)
    .put("/:id", validateRoomUpdation, verifyAdmin, handleUpdateRoom)
    .put("/availability/:id", validateRoomUpdation, handleUpdateRoomAvailability)
    .delete("/:id", verifyAdmin, handleDeleteRoom);

export default router;
