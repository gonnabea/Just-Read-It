import Book from "../model/book";
import routes from "../routes";
import User from "../model/user";
import Review from "../model/review";
import akin from "@asymmetrik/akin";
import ColorThief from "colorthief";


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
    if(book){
    book.review.forEach( argument => {
        if(argument.rate!=0){
        rateFigure += argument.rate;
        booksFigure += 1;
        }
    })
    const pickedColor = ColorThief.getColor(book.imageUrl,3)
            .then(color => {return color})
            .catch(err => {console.log(err)})
    
    const rgb = await pickedColor.then((result)=>{
        return result
    })
    const R = rgb[0];
    const G = rgb[1];
    const B = rgb[2];

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
      const coverColor = rgbToHex(R,G,B);
    const totalRate = (rateFigure/booksFigure).toPrecision(2);
    res.render("book-detail" , {book, totalRate, coverColor});
}else{
    res.render("404");
}
}

export const myBookList = async(req, res) => {
    const currentUser = await User.findById(req.user.id).populate("favBooks");
    const myBooks = await currentUser.favBooks;
    let a;
    let colorArray = await myBooks.map(async(book)=>{
        const pickedColor = ColorThief.getColor(book.imageUrl,3)
                .then(color => {return color})
                .catch(err => {console.log(err)})
        
        const rgb = await pickedColor.then((result)=>{
            return result
        })
        const R = rgb[0];
        const G = rgb[1];
        const B = rgb[2];
    
        const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
          }).join('');
          a = rgbToHex(R,G,B);
          return rgbToHex(R,G,B);
    })
    console.log(a);
    res.render("myBookList", {currentUser, colorArray});
}

export const postMyBookList = async(req, res) => {
    const {
        params: {id}, user
    } = req;
    akin.activity.log(user.id, id)
    akin.run()
    let overlap = false;
    user.favBooks.forEach(element => {
        if(element == id){
            overlap = true;
            
        }
    });
    if(overlap === false){
    user.favBooks.push(id)
    user.save();
    const book = await Book.findById(id)
    book.likeFigure +=1;
    book.save()
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
    const book = await Book.findById(id);
    const review = await Review.create({
        content: reviewContent,
        rate,
        creator: user.username,
        creatorPhoto: user.profilePhoto,
        email: user.email
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
        await Book.findByIdAndRemove({_id:id})
        res.redirect(routes.home);
    }catch(error){
        console.log(error)
    }
}

export const deleteFavBook = async(req, res) => {
    const {
        params : {id}, user
    } = req;
    let a = 0;
        user.favBooks.map(favBook => {
            if(favBook == id){
                user.favBooks.splice(a,1)
                user.save();
            }
            a+=1;
        })
        const book = await Book.findById(id)
        book.likeFigure -=1;
        book.save()

    res.redirect(`/${routes.myBookList(user.id)}`)
}

export const deleteRate = async(req, res) => {
    const {
        params : {id}, user
    } = req;
    try{
        await Review.findByIdAndDelete({_id : id})
        
    }catch(error){
        console.log(error)
    }
    res.redirect("back")
}