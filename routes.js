const HOME = "/";
const BOOK_DETAIL = "/book-detail/:id";
const ADD_BOOK = "/add-book";
const EDIT_BOOK = "/edit-book/:id";
const DELETE_BOOK = "/delete-book/:id";
const MY_BOOK_LIST = "/book-list/:id";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const EDIT_USER ="/edit-user/:id";

const GOOGLE_AUTH = "/auth/google";
const GOOGLE_AUTH_CALLBACK = "/auth/google/callback";
const NAVER_AUTH = "/auth/naver";
const NAVER_AUTH_CALLBACK = "/auth/naver/callback"
const SLACK_AUTH = "/auth/slack";
const SLACK_AUTH_CALLBACK = "/auth/slack/callback";
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
    deleteBook: (id) => {
        if(id){
            return `/delete-book/${id}`
        }else{
            return DELETE_BOOK
        }
    },
    profile: PROFILE,

    googleAuth: GOOGLE_AUTH,
    googleAuthCallback: GOOGLE_AUTH_CALLBACK,
    naverAuth: NAVER_AUTH,
    naverAuthCallback: NAVER_AUTH_CALLBACK,
    slackAuth: SLACK_AUTH,
    slackAuthCallback: SLACK_AUTH_CALLBACK,

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
    search: SEARCH,
    editUser: (id) => {
        if(id){
            return `/edit-user/${id}`
        }else{
            return EDIT_USER
        }
    }
    
}

export default routes;