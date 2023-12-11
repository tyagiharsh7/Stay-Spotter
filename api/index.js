import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import errorHandler from "./utils/errorHandler.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

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

mongoose.connection.on("disconnected", () => {
    console.log('DB DISCONNECTED');
})
