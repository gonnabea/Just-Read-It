import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL, 
{useNewUrlParser: true,
useUnifiedTopology: true}
    );

const db = mongoose.connection;

db.on('error', function(){
    console.log(`DB connection failed :(`)
});
db.once('open', function() {
  console.log(`we're connected!`);
});