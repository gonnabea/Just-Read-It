import express from "express";
import routes from "../routes";
import { getAddBook, postAddBook } from "../controller/userController";
import bookImageUpload from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.addBook, getAddBook);
userRouter.post(routes.addBook,bookImageUpload, postAddBook);

export default userRouter;