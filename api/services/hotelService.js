import hotelModel from "../models/hotelModel.js";
import roomModel from "../models/roomModel.js";
import createError from "../utils/createError.js";

const getHotels = async (params) => {
    const { featured, limit, min, max, ...othersParams } = params;

    try {
        const query = {
            ...othersParams,
            cheapestPrice: {
                $gt: min || 1,
                $lt: max || 999,
            },
        };

        if (featured) {
            query.featured = JSON.parse(featured);
        }

        const hotels = await hotelModel.find(query).limit(parseInt(limit) || 5);
        return hotels;
    } catch (error) {
        throw error;
    }
};

const getHotelById = async (hotelId) => {
    try {
        const hotel = await hotelModel.findById(hotelId);
        if (!hotel) {
            throw createError(404, "Hotel not found.");
        }
        return hotel;
    } catch (error) {
        throw error;
    }
};

const createHotel = async (hotelData) => {
    try {
        const newHotel = await hotelModel.create(hotelData);
        return newHotel;
    } catch (error) {
        throw error;
    }
};

const updateHotel = async (hotelId, updateData) => {
    try {
        const updatedHotel = await hotelModel.findByIdAndUpdate(
            hotelId,
            { $set: updateData },
            { new: true }
        );

        if (!updatedHotel) {
            throw createError(400, "Bad Request: Missing required field.");
        }

        return updatedHotel;
    } catch (error) {
        throw error;
    }
};

const deleteHotel = async (hotelId) => {
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

        return { success: true, message: "Hotel deleted successfully" };
    } catch (error) {
        throw error;
    }
};

export {
    getHotels,
    getHotelById,
    createHotel,
    updateHotel,
    deleteHotel,
};
