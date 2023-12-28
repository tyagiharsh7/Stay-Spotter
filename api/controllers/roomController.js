import * as roomService from "../services/roomService.js";

const handleCreateRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const roomData = req.body;

    try {
        const result = await roomService.createRoom(hotelId, roomData);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleGetRooms = async (req, res, next) => {
    try {
        const result = await roomService.getRooms();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleGetRoom = async (req, res, next) => {
    const roomId = req.params.id;

    try {
        const result = await roomService.getRoomById(roomId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleUpdateRoom = async (req, res, next) => {
    const roomId = req.params.id;
    const updateData = req.body;

    try {
        const result = await roomService.updateRoom(roomId, updateData);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleDeleteRoom = async (req, res, next) => {
    const roomId = req.params.id;

    try {
        const result = await roomService.deleteRoom(roomId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleUpdateRoomAvailability = async (req, res, next) => {
    const roomId = req.params.id;
    const { roomNumberId, dates } = req.body;

    try {
        const result = await roomService.updateRoomAvailability(roomId, roomNumberId, dates);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

export {
    handleCreateRoom,
    handleGetRooms,
    handleGetRoom,
    handleUpdateRoom,
    handleDeleteRoom,
    handleUpdateRoomAvailability
};
