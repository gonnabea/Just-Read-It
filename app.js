import express from "express";
import globalRouter from "./router/globalRouter";

const app = express();

app.use(globalRouter);

export default app;