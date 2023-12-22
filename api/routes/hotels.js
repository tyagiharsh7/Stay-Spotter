import express from "express";
import {
    handleGetHotels,
    handleGetHotel,
    handleCreateHotel,
    handleUpdateHotel,
    handleDeleteHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/authMiddleware.js";

const router = express.Router();

router
    .get('/', handleGetHotels)
    .get('/find/:id', handleGetHotel)
    .post("/", verifyAdmin, handleCreateHotel)
    .put("/:id", verifyAdmin, handleUpdateHotel)
    .delete("/:id", verifyAdmin, handleDeleteHotel);

export default router;
