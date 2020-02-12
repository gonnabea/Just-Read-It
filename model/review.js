import mongoose, { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    creator: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
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