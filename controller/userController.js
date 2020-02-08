import routes from "../routes";
import Book from "../model/book";
import User from "../model/user";
import passport from "passport";


export const home = async(req, res) => {
    try{
    const books = await Book.find({});
    
    res.render("home", {books})
    }catch(error){
        console.log(error);
    }
};

export const login = (req, res) => {
    res.render("login");
}

export const postLogin =
     passport.authenticate('local', {  
    successRedirect: routes.home,
    failureRedirect: routes.login,
    failureFlash: true })
   

export const join = (req, res) => {
    res.render("join");
}

export const postJoin = async(req, res) => {
    const {
        body: {username, email, password, password2}
    } = req;
    if(password == password2){
    try{const user ={
        username,
        email
    }
    const newUser = await User.register(
        user,
        password
    )
    console.log(`newUser:${newUser}`);
    res.redirect(routes.home)
}catch(error){
    console.log(error);
}
}else{
    res.render("join", {error:"비밀번호가 일치하지 않습니다."})
}
}

export const getAddBook = (req, res) => {
    res.render("uploadBook")
}


export const postAddBook = async(req, res) => {
    const {
        body: {bookName,bookDescription,author}, file:{path}
    } = req;
    try{
    const newBook = await Book.create({
        title:bookName,
        author,
        description:bookDescription,
        imageUrl:path
    })
    console.log(newBook);
}catch(error){
    console.log(error);
}
    res.redirect(routes.home);
}