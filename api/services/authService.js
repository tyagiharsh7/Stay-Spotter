import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import config from "../config/index.js"

const registerUser = async (userData) => {
    try {
        const hashedPassword = await hashPassword(userData.password);
        const newUser = await userRepository.createUser({
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
        });

        return "User created successfully";
    } catch (error) {
        throw error;
    }
};

const loginUser = async (username, password) => {
    try {
        const user = await userRepository.findByUsername(username);

        if (!user) {
            throw createError(404, "User not found.");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw createError(400, "Password does not match");
        }

        const token = generateAuthToken(user);
        const { password: _, isAdmin, ...userDetails } = user._doc;

        return { token, userDetails };
    } catch (error) {
        throw error;
    }
};

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const generateAuthToken = (user) => {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, config.jwtSecret);
};

export { registerUser, loginUser };
