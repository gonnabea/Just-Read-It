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

export const postLogin =
     passport.authenticate('local', {  
    successRedirect: routes.home,
    failureRedirect: routes.login,
    failureFlash: true })
   

export const join = (req, res) => {
    res.render("join");
}

export const postJoin = async(req, res) => {
    const {
        body: {username, email, password, password2}
    } = req;
    if(password == password2){
    try{const user ={
        username,
        email
    }
    const newUser = await User.register(
        user,
        password
    )
    res.redirect(routes.home)
}catch(error){
    console.log(error);
}
}else{
    res.render("join", {error:"비밀번호가 일치하지 않습니다."})
}
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
}

export const profile = async(req, res) => {
    const {
        user: {id}
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
    
    let results = miniSearch.search(req.body.search)
    
    
    res.render("search", {results})
}

export const editUser = (req, res) => {
    res.render("edit-profile")
}

export const postEditUser = async(req, res) => {
    const {
        user: {id},
        body: {username, password, password2, profilePhoto}
    } = req;

    if(password == password2){
        try{
            const newUser = await User.findByIdAndUpdate({_id:id},
                {username, profilePhoto}
                );
            
        }catch(error){
            console.log(error)
            res.redirect(routes.home);
        }
    }else{
        res.send("비밀번호가 일치하지 않습니다.")
    }
    
}

export const getKakaoSearch = (req, res) => {
    
   
}