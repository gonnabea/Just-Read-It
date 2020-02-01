import dotenv from "dotenv";
import app from "./app";


dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Listening on : ${PORT}`)
});