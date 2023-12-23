import * as authService from "../services/authService.js";

const handleRegisterUser = async (req, res, next) => {
    try {
        const result = await authService.registerUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const handleLoginUser = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const result = await authService.loginUser(username, password);
        res.cookie("access_token", result.token, { httpOnly: true })
            .status(200).json(result.userDetails);
    } catch (error) {
        next(error);
    }
};

export { handleRegisterUser, handleLoginUser };
