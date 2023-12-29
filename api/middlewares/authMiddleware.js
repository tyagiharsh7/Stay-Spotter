import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.json(createError(401, "Access token is missing"));
        }

        const user = await jwt.verify(token, process.env.JWTSECRET);
        req.user = user;
        next();
    } catch (error) {
        return res.json(
            createError(403, "Access token is not valid or has expired")
        );
    }
};

const authorizeUser = (req, res, next, isAdminRequired = false) => {
    const user = req.user;

    if (!user) {
        return res.json(createError(403, "Invalid user"));
    }

    if (isAdminRequired && !user.isAdmin) {
        return res.json(createError(403, "Admin access required"));
    }

    if (!isAdminRequired && !(user.isAdmin || user.id === req.params.id)) {
        return res.json(
            createError(403, "User is not authorized to perform this action")
        );
    }

    next();
};

const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => authorizeUser(req, res, next));
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => authorizeUser(req, res, next, true));
};

export { verifyUser, verifyAdmin };
