import dotenv from "dotenv";
dotenv.config();

const config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO,
    jwtSecret: process.env.JWTSECRET,
};

export default config;
