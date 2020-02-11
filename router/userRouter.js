import express from "express";
import routes from "../routes";
import { getAddBook, postAddBook, myBookList } from "../controller/bookController";
import bookImageUpload from "../middleware";
import { profile } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.addBook, getAddBook);
userRouter.post(routes.addBook,bookImageUpload, postAddBook);

userRouter.get(routes.myBookList, myBookList);

userRouter.get(routes.profile(), profile);



export default userRouter;