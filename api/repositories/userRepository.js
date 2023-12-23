import User from "../models/userModel.js";

const getUsers = async () => {
    const users = await User.find();
    return { success: true, users };
};

const getUserById = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        return { success: false, message: "User not found." };
    }

    return { success: true, user };
};

const updateUser = async (userId, updateData) => {
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: updateData },
        { new: true }
    );

    if (!updatedUser) {
        return { success: false, message: "Bad Request: Missing required field." };
    }

    return { success: true, data: updatedUser };
};

const deleteUser = async (userId) => {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
        return { success: false, message: "Bad Request: Missing required parameter - ID." };
    }

    return { success: true, message: "User deleted successfully" };
};

const createUser = async (userData) => {
    const newUser = await User.create(userData);
    return { success: true, user: newUser };
};

const findByUsername = async (username) => {
    return User.findOne({ username });
};

export { getUsers, getUserById, updateUser, deleteUser, createUser, findByUsername };
