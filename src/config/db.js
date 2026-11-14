import mongoose from "mongoose";
import config from "./config.js";

 const connectDB = async () => {
    await mongoose.connect(config.MONGO_URI)
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err);
        process.exit(1); // if db not connected then stop the server
    })
}

export default connectDB;