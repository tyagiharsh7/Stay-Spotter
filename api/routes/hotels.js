import express from "express";
import {
    handleGetHotels,
    handleGetHotel,
    handleCreateHotel,
    handleUpdateHotel,
    handleDeleteHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

router
    .get('/', handleGetHotels)
    .get('/:id', handleGetHotel)
    .post("/", handleCreateHotel)
    .put("/:id", handleUpdateHotel)
    .delete("/:id", handleDeleteHotel);

export default router;
