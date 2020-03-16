import mongoose, { Schema } from "mongoose";
import deepPopulate from "mongoose-deep-populate"

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
    }],
    likeFigure:{
        type: Number,
        default: 0
    },
    viewsFigure:{
        type: Number,
        default: 0
    },
    genre: {
        
    }
})

bookSchema.plugin(deepPopulate(mongoose));

const model = mongoose.model("Book", bookSchema);

export default model;