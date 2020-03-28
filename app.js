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
import expressReactViews from "express-react-views";
import helmet from "helmet";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import path from "path";

const app = express();
const CokieStore = MongoStore(session);
dotenv.config();


app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new CokieStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
app.use(userRouter);
app.use(globalRouter);
app.use('/uploads', express.static('uploads'));
app.use('/images',express.static("images"));
app.set("view engine","jsx");
app.set("views", path.join(__dirname, '/react-front'));
app.use(express.static("react-front"));
app.engine('jsx', expressReactViews.createEngine());
export default app;

