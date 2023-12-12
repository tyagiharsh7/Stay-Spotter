import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const handleRegisterUser = async (req, res, next) => {
    try {
        const hashedPassword = await hashPassword(req.body.password);
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        };

        const newUser = await userModel.create(userData);
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error);
    }
};

const handleLoginUser = async (req, res, next) => {
    try {
        const user = await findUserByUsername(req.body.username);

        if (!user) {
            throw createError(404, "User not found.");
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordCorrect) {
            throw createError(400, "Password does not match");
        }

        const token = generateAuthToken(user);
        const { password, isAdmin, ...userDetails } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...userDetails });
    } catch (error) {
        next(error);
    }
};

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const findUserByUsername = async (username) => {
    return userModel.findOne({ username });
};

const generateAuthToken = (user) => {
    return jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWTSECRET);
};

export { handleRegisterUser, handleLoginUser };
