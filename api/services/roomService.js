import roomModel from "../models/roomModel.js";
import hotelModel from "../models/hotelModel.js";
import createError from "../utils/createError.js";

const createRoom = async (hotelId, roomData) => {
    try {
        const hotel = await hotelModel.findById(hotelId);
        if (!hotel) {
            throw createError(404, "Hotel not found.");
        }

        const newRoom = new roomModel(roomData);
        const room = await roomModel.create(newRoom);

        await hotelModel.findByIdAndUpdate(hotelId, {
            $push: { rooms: room._id },
        });

        return { hotelId, room };
    } catch (error) {
        throw error;
    }
};

const getRooms = async () => {
    try {
        const rooms = await roomModel.find();
        return { rooms };
    } catch (error) {
        throw error;
    }
};

const getRoom = async (roomId) => {
    try {
        const room = await roomModel.findById(roomId);
        if (!room) {
            throw createError(404, "Room not found.");
        }
        return { room };
    } catch (error) {
        throw error;
    }
};

const updateRoom = async (roomId, updateData) => {
    try {
        const updatedRoom = await roomModel.findByIdAndUpdate(
            roomId,
            { $set: updateData },
            { new: true }
        );

        if (!updatedRoom) {
            throw createError(400, "Bad Request: Missing required field.");
        }

        return { success: true, data: updatedRoom };
    } catch (error) {
        throw error;
    }
};

const deleteRoom = async (roomId) => {
    try {
        const deletedRoom = await roomModel.findByIdAndDelete(roomId);

        if (!deletedRoom) {
            throw createError(
                400,
                "Bad Request: Missing required parameter - ID."
            );
        }

        await hotelModel.updateMany(
            { rooms: deletedRoom._id },
            { $pull: { rooms: deletedRoom._id } }
        );

        return { success: true, message: "Room deleted successfully" };
    } catch (error) {
        throw error;
    }
};

export { createRoom, getRooms, getRoom, updateRoom, deleteRoom };
