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
    },
    email: String,
    connectedBook: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
        }]
})

const model = mongoose.model("Review", reviewSchema);

export default model;