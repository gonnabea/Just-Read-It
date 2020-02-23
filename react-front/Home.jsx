import React from "react";
import Login from "./Login";
import Header from "./Header";

//const Ho = pug.compileFile("home.pug");


function Home(props){

    const style={
        width:"100%",
        margin:"0",
        paddgin:"0",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        
    }
    const grid = {
        gridColumnStart:"2",
        gridColumnEnd:"3",
        textAlign:"center",
        postion:"relative",

        transformStyle:"preserve-3d",
        perspective:"1200px",
    }

    const img_box={
        borderRadius:"10px",
        boxShadow: `2px 5px 3px 2px rgba(0,0,0,0.75),
        -2px -2px 1px 0px rgba(0,0,0,0.75)`,
        marginTop:"2rem",
        postion:"relative",
        transformStyle:"preserve-3d",
       // transform:"rotateY(45deg)",
        animation:"spin 10s linear infinite"
       
    }
    const underline={
    textDecoration: "none",
    color:"rgba(50, 50, 224, 0.445)",
    }

    function recommendList() {
        if(props.recomendBooks){
        return (
            <h1>{props.user.username}님만을 위한 추천 리스트 : </h1>
        )
    }
}
    function recomSys(){
        
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
                <div className="booklist_home" style={style}>
                    <div className="grid_box" style={grid}>
                <a href={props.routes.bookDetail(book.id)} style={underline}>>
                <img src={book.imageUrl} alt={book.imageUrl} width={"100vh"} style={img_box}/>
                <div className="text_box" >
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <h3>{JSON.stringify(book.createdAt)}</h3>
                <h3>{book.description}</h3>
                </div>
                </a>
                </div>
                </div>
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