import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = req.user
    next();
}

const upload = multer({ dest: 'uploads/books/' })

const bookImageUpload = upload.single("bookImage");

export const checkUserExist = (req, res, next) => {
    if(req.user){
        next()
    }else{
        res.redirect(routes.home)
    }
}

export const onlyLoggedOut = (req, res, next) => {
    if(req.user){
       res.redirect(routes.home) 
    }else{
        next()
    }
}

export default bookImageUpload;
