const HOME = "/";
const BOOK_DETAIL = "/book-detail";
const ADD_BOOK = "/add-book";
const MY_BOOK_LIST = "/book-list";
const PROFILE = "/profile";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

const GOOGLE_AUTH = "/auth/google";
const GOOGLE_AUTH_CALLBACK = "/auth/google/callback";


const routes = {
    home: HOME,
    bookDetail: BOOK_DETAIL,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,

    addBook: ADD_BOOK,

    myBookList: MY_BOOK_LIST,
    profile: PROFILE,

    googleAuth: GOOGLE_AUTH,
    googleAuthCallback: GOOGLE_AUTH_CALLBACK
    
}

export default routes;