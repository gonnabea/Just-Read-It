import express from "express";
import routes from "../routes";
import {home, login, join, postJoin, postLogin} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);


export default globalRouter;