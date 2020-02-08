import express from "express";
import routes from "../routes";
import { getAddBook, postAddBook, myBookList } from "../controller/bookController";
import bookImageUpload from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.addBook, getAddBook);
userRouter.post(routes.addBook,bookImageUpload, postAddBook);

userRouter.get(routes.myBookList, myBookList)



export default userRouter;