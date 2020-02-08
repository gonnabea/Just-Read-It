import dotenv from "dotenv";
import app from "./app";
import './db';
import "./passport";


dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Listening on : ${PORT}`)
});