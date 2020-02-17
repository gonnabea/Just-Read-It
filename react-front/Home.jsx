import React from "react";
import Login from "./Login";
import Header from "./Header";

//const Ho = pug.compileFile("home.pug");

function Home(props){
    const bookList =
        props.books.map(book => {
            return (
                <>
                {console.log(book)}
                <a href={props.routes.bookDetail(book.id)}>
                <img src={book.imageUrl} alt={book.imageUrl}/>
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
         <Header/>
         {bookList}
    </React.Fragment>
     );
}

export default Home;