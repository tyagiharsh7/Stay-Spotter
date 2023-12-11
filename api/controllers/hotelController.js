import hotelModels from "../models/hotelModels.js";

const handleGetHotels = async (req, res, next) => {
    try {
        const hotels = await hotelModels.find();
        res.status(200).json({ hotels });
    } catch (error) {
        next(error);
    }
};

const handleGetHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const hotel = await hotelModels.findById(hotelId);
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
        const newHotel = await hotelModels.create(hotelData);
        res.status(201).json(newHotel);
    } catch (error) {
        next(error);
    }
};

const handleUpdateHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const updatedHotel = await hotelModels.findByIdAndUpdate(
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
        const deletedHotel = await hotelModels.findByIdAndDelete(hotelId);

        if (!deletedHotel) {
            throw createError(
                400,
                "Bad Request: Missing required parameter - ID."
            );
        }

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

// Helper function to create error objects with status code and message
const createError = (statusCode, message) => {
    const error = new Error(message);
    error.status = statusCode;
    return error;
};
