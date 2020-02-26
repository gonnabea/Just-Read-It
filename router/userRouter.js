import express from "express";
import routes from "../routes";
import { getAddBook, postAddBook, myBookList, postMyBookList, postReview, editBook, deleteBook, deleteFavBook } from "../controller/bookController";
import bookImageUpload, { checkUserExist } from "../middleware";
import { profile, search, editUser, postEditUser } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.addBook,checkUserExist, getAddBook);
userRouter.post(routes.addBook,checkUserExist, bookImageUpload, postAddBook);

userRouter.get(routes.profile(),checkUserExist, profile);

userRouter.get(routes.myBookList(),checkUserExist, myBookList);
userRouter.post(routes.myBookList(),checkUserExist, postMyBookList);

userRouter.post(routes.postReview(),checkUserExist, postReview);

userRouter.post(routes.search, search);

userRouter.post(routes.editBook(),checkUserExist, editBook);
userRouter.post(routes.deleteBook(),checkUserExist, deleteBook);

userRouter.get(routes.editUser(),checkUserExist, editUser);
userRouter.post(routes.editUser(),checkUserExist, postEditUser);

userRouter.post(routes.deleteFavBook(), checkUserExist, deleteFavBook);
export default userRouter;