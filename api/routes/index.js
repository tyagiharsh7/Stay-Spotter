import express from "express";
import userRouter from "./users.js";
import roomRouter from "./rooms.js";
import hotelRouter from "./hotels.js";

const router = express.Router();

router.use('/user', userRouter);
router.use('/hotel', hotelRouter);
router.use('/room', roomRouter);

export default router;
