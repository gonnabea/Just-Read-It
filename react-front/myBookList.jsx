import React from "react";
import Title from "./title";

const main_box = {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    // backgroundImage: "url(../images/wood.jpg)",
    backgroundImage: "url(https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_1280.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "absolute",
    left: "0",
    top: "0",
}

const ulstyle = {
    width: "80%",
    height: "100%",
    display: "flex",
    margin: "1rem",
    justifyContent: "center",
    alignItems: "center",
    textAling: "center",
    listStyle: "none",
    zIndex: "1",
    backgroundRepeat: "no-repeat",
    boxShadow: `3px 3px 2px 1px rgba(0,0,0,0.75),
    -2px -2px 5px 1px rgba(0,0,0,0.75)`,
    overflow: "auto",
    overflowY: "hidden",

}
const ma = {
    width: "100%",
    zIndex: "2",
}

// const test = styled.div`
//     transform: rotateY(45deg),
//     &:hover{
//         transform: rotateY(45deg);
//         cursor: pointer;
//     }

// `;
const books = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    //transform:"rotateY(45deg)",

}
const bookSize = {
    cursor: "pointer",
    margin: "1rem",
    width: "7.5rem",
}
const shelf = {
    display: "block",
    width: "100%",
    marginTop: "-14vh",
    overflow: "scroll",
}
const library_btn = {
    width: "100%",
    display: "flex",
    margin: "15px 40vh 0.5rem 0em ",
    justifyContent: "flex-end",
}

const title_btn = {
    margin: "0.3rem",
    cursor: "pointer",
}

const img_btn = {
    margin: "0.3rem",
    cursor: "pointer",
}

// const ChColor= styled.button`

//     color:blue;
//     background-color:blue;
//     width:50px;
//     cursor:pointer;
//     border: 5px solid pink;

//     &:hover{
//         color:blue;
//     }
// `;

let newColor = {

    margin: "0.3rem",
    marginLeft: "2rem",
    color: "red",
    cursor: "pointer",
    backgroundColor: "black",
    width: "3.7rem",
    textAlign: "center",
    fontSize: "1rem",

}

function Title_fuc() {
    newColor.color = "yellow";
    newColor.backgroundColor = "red";
    console.log("function true");
}


const handleClick = () => {
    newColor.color = "blue";
    console.log("handleClick");
}

class MyBookList extends React.Component {
    render() {
        //console.log(this.props.currentUser)
        const routes = this.props.routes
        return (
            <div style={main_box}>
                <div style={ma}>
                    <Title />
                </div>
                <h2>{this.props.currentUser.username}님의 즐겨찾기 목록:</h2>

                <div className="library_form" style={library_btn}>
                    <button className="title_btn" style={newColor} onclick={handleClick} >Title</button>
                    <button className="img_btn" style={newColor} onclick={Title_fuc}  >Image</button>
                </div>

                {/* test ↓*/}
                <ul className="list" style={ulstyle}>
                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                        </span>

                    </li>
                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                    </li>
                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                        </span>

                    </li>
                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                    </li>
                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                            </span>
                    </li>
                </ul>
                <div>
                    <img style={shelf} src="../images/shelf.png" alt="" />
                </div>
                {/* test ↑ */}


                <ul className="list" style={ulstyle}>
                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                        {/* <img src={books.imgUrl} className=""book_img/> */}
                    </li>

                    <li style={books}>
                        <img src="../images/wood.jpg" style={bookSize} alt="" />
                        <span className="book_name">
                            book_name
                        </span>
                    </li>

                    {this.props.currentUser.favBooks.map(book => {
                        return (
                            <li style={books}>
                                <a href={`/${this.props.routes.bookDetail(book.id)}`}>
                                    <img style={bookSize} src={`/${book.imageUrl}`} alt="" />
                                    <h2>{book.title}</h2>
                                    <h3>{book.author}</h3>
                                    <h4>{book.description}</h4>
                                    <form action={routes.deleteFavBook(book.id)} method="post">
                                        <input type="submit" value="즐겨찾기 삭제" />
                                    </form>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div>
                    <img style={shelf} src="../images/shelf.png" alt="" />
                </div>


                <style jsx>{`
                html, body {
                margin: 0;
                padding:0;
                height:100vh;
                }
            `}</style>
            </div>
        )
    }

}

export default MyBookList