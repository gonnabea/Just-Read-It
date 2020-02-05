import routes from "../routes";

export const home = (req, res) => {
    res.render("home")
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


export const postAddBook = (req, res) => {
    const {
        body: {bookName,bookDescription}, file
    } = req;
    
    console.log(bookName, bookDescription);
    console.log(file);
    res.redirect(routes.home);
}