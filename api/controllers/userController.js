import * as userService from "../services/userService.js";

const handleGetUsers = async (req, res, next) => {
    try {
        const result = await userService.getUsers();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleGetUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const result = await userService.getUser(userId);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleUpdateUser = async (req, res, next) => {
    const userId = req.params.id;
    const updateData = req.body;

    try {
        const result = await userService.updateUser(userId, updateData);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const handleDeleteUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const result = await userService.deleteUser(userId);
        res.status(200).json(result);
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
