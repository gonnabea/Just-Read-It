import Book from "../model/book";
import routes from "../routes";

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
        imageUrl:path,
        enrolledBy: req.user.id
    })
    console.log(newBook);
}catch(error){
    console.log(error);
}
    res.redirect(routes.home);
}

export const myBookList = (req, res) => {
    res.render("bookList");
}

export const bookDetail = (req, res) => {
    const { params: {id} } = req;
    const book = Book.findById(id);
    console.log(book);
    res.render("book-detail" , {book});
}