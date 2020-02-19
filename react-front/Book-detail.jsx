import React from "react";
import routes from "../routes";

class bookDetail extends React.Component {
    render(){
        const book = this.props.book
        return(
        <React.Fragment>
        <img src={`/${book.imageUrl}`}/>
        <h1>{book.title}</h1>
        <h2>{book.totalRate}</h2>
        <h2>{book.author}</h2>
        <h3>{book.description}</h3>
        <form action={this.props.routes.editBook(book.id)} method="post">
        <input type="text" name="title" placeholder="수정할 이름"/>
        <input type="textarea" name="description" placeholder="상세내용"/>
        <input type="text" name="author" placeholder="작가 이름"/>
        <input type="submit" value="수정하기"/>
        </form>
        </React.Fragment>
        )
    }
}

export default bookDetail