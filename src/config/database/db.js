import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const dbConnect = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("DB already connected ")
            return;
        }

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 100,
            minPoolSize: 10
        })
        console.log("DB connected", conn.connection.host)
    } catch (error) {
        console.error("Error connecting to database", error)
        throw error;
    }
}

export default dbConnect