import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import errorHandler from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors())

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Database connection
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to the database
    }
};

// Start the server
const startServer = async () => {
    await connectToDatabase();
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on PORT ${process.env.PORT}`);
    });
};

// Listen for MongoDB disconnection
mongoose.connection.on("disconnected", () => {
    console.log('MongoDB DISCONNECTED');
});

// Run the server
startServer();
