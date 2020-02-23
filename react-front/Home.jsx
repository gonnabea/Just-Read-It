import React from "react";
import Login from "./Login";
import Header from "./Header";

//const Ho = pug.compileFile("home.pug");


function Home(props){
    function recommendList() {
        return (
            <h1>추천 리스트 : </h1>
        )
    }
    function recomSys(){
        console.log(props.recomendBooks)
        if(props.recomendBooks){
        return (
            props.recomendBooks.map(argument => {
                return (
                    <>
        <img src={argument.imageUrl}/>
        <h1>{argument.title}</h1>
        
        </>)
    })
    
    )}else{
        return "";
    }
    
}
    const bookList =
        props.books.map(book => {
            return (
                <>
                <a href={props.routes.bookDetail(book.id)}>
                <img src={book.imageUrl} alt={book.imageUrl} width={"100vh"}/>
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <h3>{JSON.stringify(book.createdAt)}</h3>
                <h3>{book.description}</h3>
                </a>
                
                </>
                )
        })
    
    //ReactDOM.render(<Join/>, document.getElementById("root"));
     return  ( 
     <React.Fragment>
         
        {Header(props)}     
         {bookList}
         {console.log(`recom from react : ${props.recomendBooks}`)}
         {recommendList()}
         {recomSys()}
    </React.Fragment>
     );
}

export default Home;