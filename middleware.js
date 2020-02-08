import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.user = req.user
    next();
}

const upload = multer({ dest: 'uploads/books/' })

const bookImageUpload = upload.single("bookImage");

export default bookImageUpload;