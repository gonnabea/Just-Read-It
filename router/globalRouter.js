import express from "express";
import routes from "../routes";
import {home, login, join, postJoin, postLogin, logout} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);


export default globalRouter;