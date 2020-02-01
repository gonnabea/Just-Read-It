import express from "express";

const app = express();
const PORT = "4000"


app.get("/", function(){
    res.send("whatever");
})



app.listen(PORT, function(){
    console.log(`Listening on ${PORT}`)
});