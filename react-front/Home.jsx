import React from "react";
import Login from "./Login";
import Header from "./Header";
// import Recommend from "./Recommend";


//const Ho = pug.compileFile("home.pug");


function Home(props) {

    const style = {
        width: "100%",
        margin: "0",
        paddgin: "0",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        backgroundColor: "rgba(107, 26, 184, 0.085)",
        //marginLeft:"-6px",

    }
    const grid = {
        gridColumnStart: "2",
        gridColumnEnd: "3",
        textAlign: "center",
        postion: "relative",

        transformStyle: "preserve-3d",
        perspective: "1200px",
    }

    const img_box = {
        borderRadius: "10px",
        boxShadow: `2px 5px 3px 2px rgba(0,0,0,0.75),
        -2px -2px 1px 0px rgba(0,0,0,0.75)`,
        marginTop: "2rem",
        postion: "relative",
        transformStyle: "preserve-3d",
        //transform:"rotateY(45deg)",
        //animation:"spin 10s linear infinite"

    }
    const underline = {
        textDecoration: "none",
        color: "rgba(50, 50, 224, 0.445)",
    }

    const reco = {
        position: "fixed",
        top: "10rem",
        right: "1rem",
    }

    const reco_ul = {
        display: "flex",
        width: "30rem",
        textAling: "center",
        justifyContent: "center",
        overflow: "auto",
        listStyle: "none",
    }
    const reco_li = {
        margin: "0.6rem",
        //border: "1px solif red",
    }
    const reco_a = {
        textDecoration: "none",
        color: "black",
        margin: "0.3rem",
    }
    const reco_img = {
        width: "3.7rem",
        borderRadius: "10px",
        boxShadow: `2px 5px 3px 2px rgba(0,0,0,0.75),
        -2px -2px 1px 0px rgba(0,0,0,0.75)`,
    }
    const reco_text = {
        width: "50px",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }


    function recommendList() {
        if (props.recomendBooks) {
            return (
                <h4 style={reco_ul}>{props.user.username}님만을 위한 추천 리스트 : </h4>
            )
        }
    }
    function recomSys() {

        if (props.recomendBooks) {
            return (
                props.recomendBooks.map(argument => {
                    return (
                        <li style={reco_li}>
                            <a style={reco_a} href={`/${props.routes.bookDetail(argument.id)}`}>
                                <img style={reco_img} src={argument.imageUrl} />
                                <h3 style={reco_text}>{argument.title}</h3>
                                <h4 style={reco_text}>{argument.author}</h4>
                                <h4 style={reco_text}>{argument.description}</h4>
                            </a>
                        </li>
                    )

                })

            )
        } else {
            return "";
        }

    }
    const bookList =
        props.books.map(book => {
            return (
                <div className="booklist_home" style={style}>
                    <div className="grid_box" style={grid}>
                        <a href={props.routes.bookDetail(book.id)} style={underline}>
                            <img src={book.imageUrl} alt={book.imageUrl} width={"100vh"} style={img_box} />
                            <div className="text_box" >
                                <h1>{book.title}</h1>
                                <h2>작가 : {book.author}</h2>
                                <h3>({book.enrolledBy[0].username}님이 등록)</h3>
                                <h3>{JSON.stringify(book.createdAt)}</h3>
                                <h3>{book.description}</h3>
                            </div>
                        </a>
                    </div>


                </div>
            )
        })

    //ReactDOM.render(<Join/>, document.getElementById("root"));
    return (

        <React.Fragment>
            {Header(props)}
            {bookList}
            <div style={reco} >
                {recommendList()}
                <ul style={reco_ul}>
                    {recomSys()}
                </ul>
            </div>
            {/* {console.log(`recom from react : ${props.recomendBooks}`)} */}
            <style jsx>{`
        html, body {
          margin: 0;
          padding:0;
        }
      `}</style>
        </React.Fragment>
    );
}

export default Home;