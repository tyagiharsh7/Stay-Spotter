import Hotel from "../models/hotelModel.js";
import Room from "../models/roomModel.js";

const getHotels = async (params) => {
    const { featured, limit, min, max, ...othersParams } = params;

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

    const hotels = await Hotel.find(query).limit(parseInt(params.limit) || 5);
    return hotels;
};

const getHotel = async (hotelId) => {
    const hotel = await Hotel.findById(hotelId);
    return hotel;
};

const createHotel = async (hotelData) => {
    const newHotel = await Hotel.create(hotelData);
    return newHotel;
};

const updateHotel = async (hotelId, updateData) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(
        hotelId,
        { $set: updateData },
        { new: true }
    );

    return updatedHotel;
};

const deleteHotel = async (hotelId) => {
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);

    // Delete corresponding rooms
    await Room.deleteMany({ _id: { $in: hotelId.rooms } });

    return { success: true, message: "Hotel deleted successfully" };
};

const getHotelRooms = async (hotelId) => {
    const hotel = await Hotel.findById(hotelId);
    const list = await Promise.all(
        hotel.rooms.map((room) => {
            return Room.findById(room);
        })
    );
    return list;
};

const findHotelsWithAvailability = async (city, bookingDates = []) => {
    // console.log("dates: ", bookingDates);
    // console.log("typeof dates: ", typeof bookingDates);
    // bookingDates.map((date) => {
    //     console.log("typeof date: ", typeof date);
    // });
    // console.log("city: ", typeof city);

    try {
        return await Hotel.aggregate([
            {
                $match: {
                    city: { $regex: new RegExp(`^${city}$`, 'i') },
                },
            },
            // TODO: match booking dates
            // {
            //     $unwind: "$rooms",
            // },
            // {
            //     $lookup: {
            //         from: "rooms",
            //         localField: "rooms",
            //         foreignField: "_id",
            //         as: "roomDetails",
            //     },
            // },
            // {
            //     $unwind: "$roomDetails",
            // },
            // {
            //     $unwind: "$roomDetails.roomNumbers",
            // },
            // {
            //     $match: {
            //         "roomDetails.roomNumbers.unavailableDates": {
            //             $not: {
            //                 $elemMatch: {
            //                     $in: bookingDates.map(date => new Date(parseInt(date)).toISOString().replace('Z', '+00:00'))
            //                 }
            //             }
            //         }
            //     },
            // },
        ]);
    } catch (error) {
        throw error;
    }
};

export {
    getHotels,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel,
    getHotelRooms,
    findHotelsWithAvailability,
};
