import * as userRepository from "../repositories/userRepository.js";
import createError from "../utils/createError.js";

const getUsers = async () => {
    try {
        const result = await userRepository.getUsers();
        return result;
    } catch (error) {
        throw error;
    }
};

const getUser = async (userId) => {
    try {
        const result = await userRepository.getUserById(userId);
        if (!result.success) {
            throw createError(404, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (userId, updateData) => {
    try {
        const result = await userRepository.updateUser(userId, updateData);
        if (!result.success) {
            throw createError(400, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const result = await userRepository.deleteUser(userId);
        if (!result.success) {
            throw createError(400, result.message);
        }
        return result;
    } catch (error) {
        throw error;
    }
};

export { getUsers, getUser, updateUser, deleteUser };
