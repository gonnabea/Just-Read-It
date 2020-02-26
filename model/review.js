import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    creator: String,
    creatorPhoto: String,
    content: String,
    rate:{
        type: Number,
        default: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const model = mongoose.model("Review", reviewSchema);

export default model;