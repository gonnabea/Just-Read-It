import routes from "./routes";
import multer from "multer";
import crypto from "crypto";
import mime from "mime-types";

export const localsMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = req.user
    next();
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/books/')
    },
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
      });
    }
  });

/*https://github.com/expressjs/multer/issues/170*/

const upload = multer({ storage })

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
