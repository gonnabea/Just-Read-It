import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, 
{useNewUrlParser: true,
  useFindAndModify: false}
    );

const db = mongoose.connection;

db.on('error', function(){
    console.log(`DB connection failed :(`)
});
db.once('open', function() {
  console.log(`we're connected!`);
});