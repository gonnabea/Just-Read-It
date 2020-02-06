import routes from "../routes";
import Book from "../model/book";

export const home = async(req, res) => {
    try{
    const books = await Book.find({});
    console.log(books);
    res.render("home", {books})
    }catch(error){
        console.log(error);
    }
};

export const login = (req, res) => {
    res.render("login");
}

export const join = (req, res) => {
    res.render("join");
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