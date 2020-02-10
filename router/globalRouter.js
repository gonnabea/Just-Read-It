import express from "express";
import routes from "../routes";
import {home, login, join, postJoin, postLogin, logout} from "../controller/userController";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.googleAuth, 
passport.authenticate('google', { scope: ['profile', 'email', 'openid'] })
)

globalRouter.get(routes.googleAuthCallback,
    passport.authenticate('google', { failureRedirect: routes.login }),
    function(req, res) {
    res.redirect(routes.home);
    }
)

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);


export default globalRouter;