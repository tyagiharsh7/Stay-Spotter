import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();


mongoose
    .connect(process.env.MONGO)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on PORT ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error", error);
    });

mongoose.connection.on("connected", () => {
    console.log('DB CONNECTED');
})

mongoose.connection.on("disconnected", () => {
    console.log('DB DISCONNECTED');
})
