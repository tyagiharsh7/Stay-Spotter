import jwt from "jsonwebtoken";
import createError from "./createError.js";

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
        return res.json(createError(403, "Access token is not valid or has expired"));
    }
};

const authorizeUser = (req, res, next, isAdminRequired = false) => {
    if (
        req.user && ((isAdminRequired && req.user.isAdmin) ||
        req.user.id === req.params.id)
    ) {
        return next();
    }

    return res.json(createError(403, "User is not authorized to perform this action"));
};

const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => authorizeUser(req, res, next));
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => authorizeUser(req, res, next, true));
};

export { verifyUser, verifyAdmin };
