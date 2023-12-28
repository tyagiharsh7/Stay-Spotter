import * as roomRepository from "../repositories/roomRepository.js";
import createError from "../utils/createError.js";

const createRoom = async (hotelId, roomData) => {
    try {
        const result = await roomRepository.createRoom(hotelId, roomData);
        if (!result.success) {
            throw createError(404, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const getRooms = async () => {
    try {
        const result = await roomRepository.getRooms();
        if (!result.success) {
            throw createError(500, "Internal Server Error");
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const getRoomById = async (roomId) => {
    try {
        const result = await roomRepository.getRoomById(roomId);
        if (!result.success) {
            throw createError(404, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const updateRoom = async (roomId, updateData) => {
    try {
        const result = await roomRepository.updateRoom(roomId, updateData);
        if (!result.success) {
            throw createError(400, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const deleteRoom = async (roomId) => {
    try {
        const result = await roomRepository.deleteRoom(roomId);
        if (!result.success) {
            throw createError(400, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const updateRoomAvailability = async (roomId, roomNumberId, dates) => {
    try {
        const result = await roomRepository.updateRoomAvailability(roomId, roomNumberId, dates);
        return result;
    } catch (err) {
        throw err;
    }
};

export { createRoom, getRooms, getRoomById, updateRoom, deleteRoom, updateRoomAvailability };
