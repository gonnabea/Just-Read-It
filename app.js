import express from "express";
import globalRouter from "./router/globalRouter";
import { localsMiddleware } from "./middleware";

const app = express();

app.use(localsMiddleware);
app.use(globalRouter);
app.set("view engine","pug");

export default app;