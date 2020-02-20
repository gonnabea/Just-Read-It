import express from "express";
import routes from "../routes";
import {home, login, join, postJoin, postLogin, logout} from "../controller/userController";
import passport from "passport";
import { bookDetail } from "../controller/bookController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login, login);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.googleAuth, 
passport.authenticate('google', { scope: ['profile', 'email', 'openid'] }) // openid?
)

globalRouter.get(routes.googleAuthCallback,
    passport.authenticate('google', { failureRedirect: routes.login }),
    function(req, res) {
    res.redirect(routes.home);
    }
)

globalRouter.get(routes.naverAuth, 
    passport.authenticate('naver', {
        failureRedirect: routes.login
    })
    )

globalRouter.get(routes.naverAuthCallback,
    passport.authenticate('naver', { failureRedirect: routes.login}),
    function(req, res) {
        res.redirect(routes.home);
    }
    )

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.bookDetail(), bookDetail)


export default globalRouter;