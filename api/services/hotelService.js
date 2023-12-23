import createError from "../utils/createError.js";
import * as hotelRepository from "../repositories/hotelRepository.js";

const getHotels = async (params) => {
    try {
        const hotels = await hotelRepository.getHotels(params);
        return hotels;
    } catch (error) {
        throw error;
    }
};

const getHotelById = async (hotelId) => {
    try {
        const hotel = await hotelRepository.getHotel(hotelId);
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
        const newHotel = await hotelRepository.createHotel(hotelData);
        return newHotel;
    } catch (error) {
        throw error;
    }
};

const updateHotel = async (hotelId, updateData) => {
    try {
        const updatedHotel = await hotelRepository.updateHotel(hotelId, updateData);
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
        const deletedHotel = await hotelRepository.deleteHotel(hotelId);
        return deletedHotel;
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
