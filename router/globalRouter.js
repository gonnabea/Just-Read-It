import express from "express";
import routes from "../routes";
import {home, login, join, addBook} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.join, join);
globalRouter.get(routes.addBook, addBook)

export default globalRouter;