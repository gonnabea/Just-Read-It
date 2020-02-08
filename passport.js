import User from "./model/user";
import passport from "passport";
import Localstrategy from 'passport-local';


passport.use(new Localstrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
