import express from "express";
import routes from "../routes";
import {home, login, join, postJoin, postLogin, logout} from "../controller/userController";
import passport from "passport";
import { bookDetail } from "../controller/bookController";
import { onlyLoggedOut } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.login,onlyLoggedOut, login);
globalRouter.post(routes.login,onlyLoggedOut, postLogin);

globalRouter.get(routes.googleAuth,onlyLoggedOut, 
passport.authenticate('google', { scope: ['profile', 'email', 'openid'] }) // openid?
)

globalRouter.get(routes.googleAuthCallback,
    passport.authenticate('google', { failureRedirect: routes.login }),
    function(req, res) {
    res.redirect(routes.home);
    }
)

globalRouter.get(routes.naverAuth, onlyLoggedOut,
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

globalRouter.get(routes.slackAuth,onlyLoggedOut,
    passport.authorize('slack')
    )

globalRouter.get(routes.slackAuthCallback,
  passport.authorize('slack', { failureRedirect: routes.login }),
  (req, res) => res.redirect(routes.home) // Successful authentication, redirect home.
);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.join, join);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.bookDetail(), bookDetail)


export default globalRouter;