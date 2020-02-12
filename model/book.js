import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    createdAt:{
        type:Date,
        default: Date.now
    },
    enrolledBy:[{type: Schema.Types.ObjectId, ref:"User"}],
    imageUrl:String,
    description:String,
    review:[{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }]
})

const model = mongoose.model("Book", bookSchema);

export default model;