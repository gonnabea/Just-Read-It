import express from "express";
import routes from "../routes";
import { getAddBook, postAddBook, myBookList, postMyBookList, postReview } from "../controller/bookController";
import bookImageUpload from "../middleware";
import { profile } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.addBook, getAddBook);
userRouter.post(routes.addBook,bookImageUpload, postAddBook);

userRouter.get(routes.profile(), profile);

userRouter.get(routes.myBookList(), myBookList);
userRouter.post(routes.myBookList(), postMyBookList);

userRouter.post(routes.postReview(), postReview);
export default userRouter;