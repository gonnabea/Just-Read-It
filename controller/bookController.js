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

export const myBookList = (req, res) => {
    res.render("bookList");
}