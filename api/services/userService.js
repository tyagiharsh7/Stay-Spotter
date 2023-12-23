import userModel from "../models/userModel.js";
import createError from "../utils/createError.js";

const getUsers = async () => {
    try {
        const users = await userModel.find();
        return { users };
    } catch (error) {
        throw error;
    }
};

const getUser = async (userId) => {
    try {
        const user = await userModel.findById(userId);
        if (!user) {
            throw createError(404, "User not found.");
        }
        return { user };
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userId, updateData) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true }
        );

        if (!updatedUser) {
            throw createError(400, "Bad Request: Missing required field.");
        }

        return { success: true, data: updatedUser };
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            throw createError(
                400,
                "Bad Request: Missing required parameter - ID."
            );
        }

        return { success: true, message: "User deleted successfully" };
    } catch (error) {
        throw error;
    }
};

export { getUsers, getUser, updateUser, deleteUser };
