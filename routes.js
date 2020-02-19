const HOME = "/";
const BOOK_DETAIL = "/book-detail/:id";
const ADD_BOOK = "/add-book";
const EDIT_BOOK = "/edit-book/:id";
const MY_BOOK_LIST = "/book-list/:id";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

const GOOGLE_AUTH = "/auth/google";
const GOOGLE_AUTH_CALLBACK = "/auth/google/callback";
const NAVER_AUTH = "/auth/naver";

const PROFILE = "/user/:id";

const POSTREVIEW = "/book-review/:id";

const SEARCH = "/book-search";

const routes = {
    home: HOME,
    bookDetail: function(id) {
        if(id){
            return `book-detail/${id}`
        }else{
            return BOOK_DETAIL
        }
    },
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,

    addBook: ADD_BOOK,
    myBookList: (id) => {
        if(id){
            return `book-list/${id}`
        }else{
            return MY_BOOK_LIST
        }
    },
    editBook: (id) => {
        if(id){
            return `/edit-book/${id}`
        }else{
            return EDIT_BOOK
        }
    },
    profile: PROFILE,

    googleAuth: GOOGLE_AUTH,
    googleAuthCallback: GOOGLE_AUTH_CALLBACK,
    naverAuth: NAVER_AUTH,

    profile: (id) => {
        if(id){
            return `user/${id}`
        }else{
            return PROFILE
        }
    },
    postReview: (id) => {
        if(id){
            return `/book-review/${id}`
        }else{
            return POSTREVIEW
        }
    },
    search: SEARCH
    
}

export default routes;