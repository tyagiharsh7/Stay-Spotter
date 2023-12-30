import express from "express";
import {
    handleGetHotels,
    handleGetHotel,
    handleCreateHotel,
    handleUpdateHotel,
    handleDeleteHotel,
    handleGetHotelRooms,
    handleGetHotelsWithAvailability
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../middlewares/authMiddleware.js";
import { validateHotelCreation, validateHotelUpdation } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
    .get('/', handleGetHotels)
    .get('/find/:id', handleGetHotel)
    .get('/find/room/:id', handleGetHotelRooms)
    .get('/availability', handleGetHotelsWithAvailability)
    .post("/", validateHotelCreation, verifyAdmin, handleCreateHotel)
    .put("/:id", validateHotelUpdation, verifyAdmin, handleUpdateHotel)
    .delete("/:id", verifyAdmin, handleDeleteHotel);

export default router;
