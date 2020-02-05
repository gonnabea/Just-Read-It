import express from "express";
import globalRouter from "./router/globalRouter";
import { localsMiddleware } from "./middleware";
import userRouter from "./router/userRouter";
import bodyParser from "body-parser";

const app = express();

app.use(localsMiddleware);
app.use(userRouter);
app.use(globalRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine","pug");

export default app;