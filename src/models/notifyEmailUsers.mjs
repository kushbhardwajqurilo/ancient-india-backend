import mongoose from "mongoose";

const emailSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {
    timestamps: true
})

export const EmailSubscribers = mongoose.model("emailsubscriber", emailSubscriberSchema)
