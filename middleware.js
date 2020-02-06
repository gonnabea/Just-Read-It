import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    next();
}

const upload = multer({ dest: 'uploads/books/' })

const bookImageUpload = upload.single("bookImage");

export default bookImageUpload;