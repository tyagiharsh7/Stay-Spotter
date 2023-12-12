import roomModel from "../models/roomModel.js";
import hotelModel from "../models/hotelModel.js";
import createError from "../utils/createError.js";

const handleCreateRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new roomModel(req.body);

    try {
        const hotel = await hotelModel.findById(hotelId);
        if (!hotel) {
            throw createError(404, "Hotel not found.");
        }
        
        const room = await roomModel.create(newRoom);
        await hotelModel.findByIdAndUpdate(hotelId, {
            $push: { rooms: room._id },
        });
        res.status(200).json({hotel: hotelId, room: room});
    } catch (error) {
        next(error);
    }
};

const handleGetRooms = async (req, res, next) => {
    try {
        const rooms = await roomModel.find();
        res.status(200).json({ rooms });
    } catch (error) {
        next(error);
    }
};

const handleGetRoom = async (req, res, next) => {
    const roomId = req.params.id;

    try {
        const room = await roomModel.findById(roomId);
        if (!room) {
            throw createError(404, "Room not found.");
        }
        res.status(200).json({ room });
    } catch (error) {
        next(error);
    }
};

const handleUpdateRoom = async (req, res, next) => {
    const roomId = req.params.id;

    try {
        const updatedRoom = await roomModel.findByIdAndUpdate(
            roomId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedRoom) {
            throw createError(400, "Bad Request: Missing required field.");
        }

        res.status(200).json({ success: true, data: updatedRoom });
    } catch (error) {
        next(error);
    }
};

const handleDeleteRoom = async (req, res, next) => {
    const roomId = req.params.id;

    try {
        const deletedRoom = await roomModel.findByIdAndDelete(roomId);

        if (!deletedRoom) {
            throw createError(
                400,
                "Bad Request: Missing required parameter - ID."
            );
        }

        // Remove room reference from corresponding hotels
        await hotelModel.updateMany(
            { rooms: deletedRoom._id },
            { $pull: { rooms: deletedRoom._id } }
        );

        res.status(200).json({
            success: true,
            message: "Room deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

export {
    handleCreateRoom,
    handleGetRooms,
    handleGetRoom,
    handleUpdateRoom,
    handleDeleteRoom
}