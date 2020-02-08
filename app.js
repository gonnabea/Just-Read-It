import express from "express";
import globalRouter from "./router/globalRouter";
import { localsMiddleware } from "./middleware";
import userRouter from "./router/userRouter";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";

const app = express();

app.use(localsMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRouter);
app.use(globalRouter);
app.use(cookieParser());
app.use(express.static("public"));
app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/uploads', express.static('uploads'));
app.set("view engine","pug");

export default app;