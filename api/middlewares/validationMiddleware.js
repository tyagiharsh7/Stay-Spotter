import {
    userSchema,
    userRegisterSchema,
    hotelCreateSchema,
    hotelUpdateSchema,
    roomCreateSchema,
    roomUpdateSchema
} from "../utils/validationSchema.js";

const validateUser = (req, res, next) => {
    try {
        userSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const validateUserRegistration = (req, res, next) => {
    try {
        userRegisterSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const validateHotelCreation = (req, res, next) => {
    try {
        hotelCreateSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const validateHotelUpdation = (req, res, next) => {
    try {
        hotelUpdateSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const validateRoomCreation = (req, res, next) => {
    try {
        roomCreateSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const validateRoomUpdation = (req, res, next) => {
    try {
        roomUpdateSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

export {
    validateUser,
    validateUserRegistration,
    validateHotelCreation,
    validateHotelUpdation,
    validateRoomCreation,
    validateRoomUpdation
};
