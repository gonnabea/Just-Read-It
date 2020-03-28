import routes from "./routes";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import crypto from "crypto";
import mime from "mime-types";
import multer from "multer";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2"
})

export const localsMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = req.user;
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

export const upload = multer({storage: multerS3({
  s3,
  acl: "public-read",
  bucket: "2020nomadhackathon/book"
})})
export const avatarUpload = multer({ storage: multerS3({
  s3,
  acl: "public-read",
  bucket: "2020nomadhackathon/avatar"
})})

export const bookImageUpload = upload.single("bookImage");
export const userAvatarUpload = avatarUpload.single("profilePhoto");

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


