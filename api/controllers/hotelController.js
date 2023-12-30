import * as hotelService from "../services/hotelService.js";

const handleGetHotels = async (req, res, next) => {
    const { query } = req;

    try {
        const hotels = await hotelService.getHotels(query);
        res.status(200).json({ hotels });
    } catch (error) {
        next(error);
    }
};

const handleGetHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const hotel = await hotelService.getHotelById(hotelId);
        res.status(200).json({ hotel });
    } catch (error) {
        next(error);
    }
};

const handleCreateHotel = async (req, res, next) => {
    const { body } = req;

    try {
        const newHotel = await hotelService.createHotel(body);
        res.status(201).json(newHotel);
    } catch (error) {
        next(error);
    }
};

const handleUpdateHotel = async (req, res, next) => {
    const hotelId = req.params.id;
    const updateData = req.body;

    try {
        const updatedHotel = await hotelService.updateHotel(
            hotelId,
            updateData
        );
        res.status(200).json({ success: true, data: updatedHotel });
    } catch (error) {
        next(error);
    }
};

const handleDeleteHotel = async (req, res, next) => {
    const hotelId = req.params.id;

    try {
        const result = await hotelService.deleteHotel(hotelId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleGetHotelRooms = async (req, res, next) => {
    const id = req.params.id;
    try {
        const rooms = await hotelService.getHotelRooms(id);
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};

const handleGetHotelsWithAvailability = async (req, res) => {
    const { city, bookingDates } = req.query;
    console.log('reqbody: ', req.query);

    try {
        const hotelsWithAvailability =
            await hotelService.getHotelsWithAvailability(
                city,
                bookingDates
            );
        console.log('hotelsWithAvailability: ', hotelsWithAvailability);
        res.status(200).json(hotelsWithAvailability);
    } catch (error) {
        console.error(error);
        return;
    }
};

export {
    handleGetHotels,
    handleGetHotel,
    handleCreateHotel,
    handleUpdateHotel,
    handleDeleteHotel,
    handleGetHotelRooms,
    handleGetHotelsWithAvailability
};
