import Book from "../model/book";
import routes from "../routes";
import User from "../model/user";
import Review from "../model/review";
import akin from "@asymmetrik/akin";

export const getAddBook = (req, res) => {
    res.render("uploadBook")
}


export const postAddBook = async(req, res) => {
    const {
        body: {bookName,bookDescription,author}, file:{path}
    } = req;
    console.log(req.body,req.file);
    try{
    const newBook = await Book.create({
        title:bookName,
        author,
        description:bookDescription,
        imageUrl:path,
        enrolledBy: req.user.id
    })
    
    const currentUser = req.user;
    currentUser.uploadedBooks.push(newBook.id);
    currentUser.save();
}catch(error){
    console.log(error);
}
    res.redirect(routes.home);
}

export const bookDetail = async(req, res) => {
    const { params: {id} } = req;
    let rateFigure = 0;
    let booksFigure = 0;
    const book = await Book.findById(id).populate("enrolledBy").populate("review");
    await akin.activity.log(req.user.id, book.id)
    akin.run()
    
    
    book.review.forEach( argument => {
        rateFigure += argument.rate;
        booksFigure += 1;
    })
    const totalRate = (rateFigure/booksFigure).toPrecision(2);
    res.render("book-detail" , {book, totalRate});
}

export const myBookList = async(req, res) => {
    const currentUser = await User.findById(req.user.id).populate("favBooks");
    
    res.render("myBookList", {currentUser});
}

export const postMyBookList = (req, res) => {
    const {
        params: {id}, user
    } = req;
    let overlap = false;
    user.favBooks.forEach(element => {
        if(element == id){
            overlap = true;
            
        }
    });
    if(overlap === false){
    user.favBooks.push(id)
    user.save();
    }
    res.redirect(`/${routes.myBookList(user.id)}`);
}

export const postReview = async(req, res) => {
    const {
        body: {
            reviewContent,
            rate
        },
        params: {id},
        user
    } = req;
    console.log(reviewContent, rate, id, req.user)
    const book = await Book.findById(id);
    const review = await Review.create({
        content: reviewContent,
        rate,
        creator: user.username,
        creatorPhoto: user.profilePhoto
    })
    book.review.push(review.id);
    book.save();
    user.reviews.push(review.id)
    user.save();
    res.redirect(`/${routes.bookDetail(id)}`);
}

export const editBook = async(req, res) => {
    const { 
    params : {id},
    body: {title, description, author}
    } = req;
    try{
    const book = await Book.findByIdAndUpdate({_id:id}, {title, description, author})
    console.log(book);
    res.redirect(`/${routes.bookDetail(id)}`);
    }catch(error){
        console.log(error);
    }
}

export const deleteBook = async(req, res) => {
    const {
        params: {id}
    } = req;
    try {
        await Book.findByIdAndDelete({_id:id})
        res.redirect(routes.home);
    }catch(error){
        console.log(error)
    }
}