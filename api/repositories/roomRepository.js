import Room from "../models/roomModel.js";
import Hotel from "../models/hotelModel.js";

const createRoom = async (hotelId, roomData) => {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
        return { success: false, message: "Hotel not found." };
    }

    const newRoom = new Room(roomData);
    const room = await Room.create(newRoom);

    await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: room._id },
    });

    return { success: true, hotelId, room };
};

const getRooms = async () => {
    const rooms = await Room.find();
    return { success: true, rooms };
};

const getRoomById = async (roomId) => {
    const room = await Room.findById(roomId);
    if (!room) {
        return { success: false, message: "Room not found." };
    }

    return { success: true, room };
};

const updateRoom = async (roomId, updateData) => {
    const updatedRoom = await Room.findByIdAndUpdate(
        roomId,
        { $set: updateData },
        { new: true }
    );

    if (!updatedRoom) {
        return {
            success: false,
            message: "Bad Request: Missing required field.",
        };
    }

    return { success: true, data: updatedRoom };
};

const deleteRoom = async (roomId) => {
    const deletedRoom = await Room.findByIdAndDelete(roomId);

    if (!deletedRoom) {
        return {
            success: false,
            message: "Bad Request: Missing required parameter - ID.",
        };
    }

    await Hotel.updateMany(
        { rooms: deletedRoom._id },
        { $pull: { rooms: deletedRoom._id } }
    );

    return { success: true, message: "Room deleted successfully" };
};

const updateRoomAvailability = async (roomId, roomNumberId, dates) => {
    await Room.updateOne(
        { _id: roomId, "roomNumbers._id": roomNumberId },
        {
            $push: {
                "roomNumbers.$.unavailableDates": dates,
            },
        }
    );

    return { success: true, message: "Room availability updated successfully" };
};

export {
    createRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
    updateRoomAvailability,
};
