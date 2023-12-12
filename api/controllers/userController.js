import userModel from "../models/userModel.js";
import createError from "../utils/createError.js";

const handleGetUsers = async (req, res, next) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ users });
    } catch (error) {
        next(error);
    }
};

const handleGetUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            throw createError(404, "User not found.");
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};

const handleUpdateUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: req.body },
            { new: true }
        );

        if (!updatedUser) {
            throw createError(400, "Bad Request: Missing required field.");
        }

        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        next(error);
    }
};

const handleDeleteUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            throw createError(
                400,
                "Bad Request: Missing required parameter - ID."
            );
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

export {
    handleGetUsers,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
};