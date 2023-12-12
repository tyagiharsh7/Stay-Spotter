import hotelModel from "../models/hotelModel.js";
import roomModel from "../models/roomModel.js";
import createError from "../utils/createError.js";

const handleGetHotels = async (req, res, next) => {
    try {
        const hotels = await hotelModel.find();
        res.status(200).json({ hotels });
    } catch (error) {
        next(error);
    }
};

const handleGetHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const hotel = await hotelModel.findById(hotelId);
        if (!hotel) {
            throw createError(404, "Hotel not found.");
        }
        res.status(200).json({ hotel });
    } catch (error) {
        next(error);
    }
};

const handleCreateHotel = async (req, res, next) => {
    const hotelData = {
        name: req.body.name,
        type: req.body.type,
        city: req.body.city,
        address: req.body.address,
        distance: req.body.distance,
        title: req.body.title,
        description: req.body.description,
        cheapestPrice: req.body.cheapestPrice,
    };

    try {
        const newHotel = await hotelModel.create(hotelData);
        res.status(201).json(newHotel);
    } catch (error) {
        next(error);
    }
};

const handleUpdateHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const updatedHotel = await hotelModel.findByIdAndUpdate(
            hotelId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedHotel) {
            throw createError(400, "Bad Request: Missing required field.");
        }

        res.status(200).json({ success: true, data: updatedHotel });
    } catch (error) {
        next(error);
    }
};

const handleDeleteHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const deletedHotel = await hotelModel.findByIdAndDelete(hotelId);

        if (!deletedHotel) {
            throw createError(
                400,
                "Bad Request: Missing required parameter - ID."
            );
        }

        // Delete corresponding rooms
        await roomModel.deleteMany({ _id: { $in: deletedHotel.rooms } });

        res.status(200).json({
            success: true,
            message: "Hotel deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

export {
    handleGetHotels,
    handleGetHotel,
    handleCreateHotel,
    handleUpdateHotel,
    handleDeleteHotel,
};