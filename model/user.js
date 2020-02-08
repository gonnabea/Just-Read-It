import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema ({
    username: String,
    email: String,
    profilePhoto: String,
    googleId: Number
})

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

const model = mongoose.model("User", userSchema);

export default model;