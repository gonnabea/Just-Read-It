import express from "express";
import globalRouter from "./router/globalRouter";
import { localsMiddleware } from "./middleware";
import userRouter from "./router/userRouter";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import "./passport";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);
app.use(userRouter);
app.use(globalRouter);
app.use('/uploads', express.static('uploads'));
app.set("view engine","pug");

export default app;