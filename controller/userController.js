import routes from "../routes";
import Book from "../model/book";
import User from "../model/user";
import passport from "passport";
import MiniSearch from "minisearch";
import akin from "@asymmetrik/akin";


export const home = async(req, res) => {
    try{
    const books = await Book.find({}).populate("enrolledBy");
    
    
    if(req.user){
    let recommendation = akin.recommendation.getAllRecommendationsForUser(
        req.user.id
      );
    recommendation=  await recommendation.then(function(result) {
        return(result) 
     })
     
      if(recommendation !== null){
          
      const recomedbooksID = recommendation.recommendations.map( argument => {
          return(argument.item)
      })
      
      const recomendBooks = await Promise.all(recomedbooksID.map(async argument => {
          const book = await Book.findById(argument);
          return(book)
      }))
    //console.log(`recommendation:${recommendation}`)
    res.render("home", {books, recomendBooks})
      }else{
        res.render("home", {books})
      }
    
    }else{
        
        res.render("home", {books})
      }
    }catch(error){
        console.log(error);
    }
};

export const login = (req, res) => {
    res.render("login");
}

export const postLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        
        if(!user) {
            return res.render("login" , {success : false, message : '인증에 실패하였습니다. 이메일과 비밀번호를 다시 확인해주세요!'})
        }
            req.login(user, function(err){
                if(err){
                    return next(err);
            }
            return res.redirect(routes.home);
          });
        })(req, res, next)
        

    }


   

export const join = (req, res) => {
    res.render("join");
}

export const postJoin = async(req, res) => {
    const {
        body: {username, email, password, password2}
    } = req;
    if(password.length >= 8){
    if(password == password2){
    try{const user ={
        username,
        email
    }
    const newUser = await User.register(
        user,
        password
    )
    res.redirect(routes.login);
}catch(error){
    console.log(`try-catch: ${error}`);
}
}else{
    res.render("join", {msg:"비밀번호가 일치하지 않습니다."})
}
    }else{
        res.render("join", {msg:"패스워드는 8글자 이상이어야 합니다"})
    }
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

export const profile = async(req, res) => {
    const {
        params: {id}
    } = req;
    const currentUser = await User.findById(id).populate("uploadedBooks").populate("reviews");
    res.render("profile", {currentUser})
}
export const search = async(req, res) => {
    const books = await Book.find({})
    let miniSearch = new MiniSearch({
        fields: ['title', 'author', 'description'], // fields to index for full-text search
        storeFields: ['title', 'author', 'imageUrl', 'description'] // fields to return with search results
      })
    miniSearch.addAll(books);
    
    let results = miniSearch.search(req.body.search, { prefix: true})
    
    
    res.render("search", {results, searchingBy : req.body.search})
}

export const editUser = (req, res) => {
    res.render("edit-profile")
}

export const postEditUser = async(req, res) => {
    const {
       
        body: {username},
        file
    } = req;
    console.log(username, file)
    
        try{
        await User.findByIdAndUpdate(req.user.id,
                {username,
                profilePhoto: file ? `/${file.path}` : req.user.profilePhoto
                }
                );
            res.redirect(`/${routes.profile(req.user.id)}`)
        }catch(error){
            console.log(error)
            res.redirect(routes.home);
        }
    
    
}

export const getKakaoSearch = (req, res) => {
    
   
}

export const sortBooks = async(req, res) => {
    const {
       params : {id} 
    } = req;

    console.log(id);
    const books = await Book.find();
    const filteredBooks = books.filter(
        book => book.genre == id
    )
    let sortedBy
    if(id == "novel"){
        sortedBy = "소설"
    }
    else if(id == "self-development"){
        sortedBy = "자기계발서"
    }
    else if(id == "programming"){
        sortedBy = "개발관련서적"
    }
    else if(id == "autobiography"){
        sortedBy = "자서전"
    }
    else if(id == "overseas"){
        sortedBy = "해외서적"
    }
    else if(id == "essay"){
        sortedBy = "시/에세이"
    }
    else if(id == "business"){
        sortedBy = "경제/경영"
    }
    else if(id == "history"){
        sortedBy = "역사/문화"
    }
    else if(id == "religion"){
        sortedBy = "종교"
    }
    else if(id == "society"){
        sortedBy = "정치/사회"
    }
    else if(id == "culture"){
        sortedBy = "예술/대중문화"
    }
    else if(id == "science"){
        sortedBy = "과학"
    }
    else if(id == "tech"){
        sortedBy = "기술/공학"
    }
    else if(id == "etc"){
        sortedBy = "기타"
    }

    console.log(books)
    res.render("sortBooks", {sortedBy, books:filteredBooks})
    
}