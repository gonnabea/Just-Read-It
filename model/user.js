import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new mongoose.Schema ({
    username: String,
    email: String,
    profilePhoto: {
        type:String,
        default:"/images/defaultImage.webp"
    },
    googleId: Number,
    uploadedBooks: [{
    type: Schema.Types.ObjectId,
    ref: "Book"
    }],
    favBooks: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]

})

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});
userSchema.plugin(findOrCreate);

const model = mongoose.model("User", userSchema);

export default model;